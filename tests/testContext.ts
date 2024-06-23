import { createInnerTRPCContext } from "~/server/api/trpc";

export const createTestContext = () => {
  const innerContext = createInnerTRPCContext();

  return {
    ...innerContext,
  };
};
