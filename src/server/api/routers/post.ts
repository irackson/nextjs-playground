import { z } from "zod";
import { faker } from "@faker-js/faker";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "homedeveloper/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // await ctx.db.tmpTest.create({
      //   data: {
      //     name: faker.person.firstName(),
      //     score: faker.number.float({ min: 0, max: 100 }),
      //   },
      // });
      const tmpTests = await ctx.db.tmpTest.findMany();

      // Update each record's score by subtracting 1
      for (const test of tmpTests) {
        await ctx.db.tmpTest.update({
          where: { id: test.id },
          // @ts-expect-error willfix
          data: { score: test.score != null ? test.score - 1 : null },
        });
      }

      return ctx.db.post.create({
        data: {
          name: input.name,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
