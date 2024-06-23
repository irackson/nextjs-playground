import { test, expect } from "@playwright/test";

test("Ping", async ({ baseURL }) => {
  console.log({ baseURL });
  const res = await fetch(`${baseURL}/api/v1/ping`).then(
    async (r) => (await r.json()) as Record<string, unknown>,
  );
  console.log(res);
  expect(res).toBeDefined();
  expect(res.message).toBe("pong");
});
