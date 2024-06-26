import type { NextApiRequest, NextApiResponse } from "next";

type PingResponse = {
  status: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PingResponse>,
) {
  if (req.query.throw === "true")
    throw Error(`test error from ${req.url} at ${new Date().toISOString()}`);
  res.status(200).json({ status: "Success", message: "pong" });
  return;
}
