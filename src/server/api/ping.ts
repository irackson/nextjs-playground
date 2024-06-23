import type { NextApiRequest, NextApiResponse } from "next";

type PingResponse = {
  status: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PingResponse>,
) {
  res.status(200).json({ status: "Success", message: "pong" });
  return;
}
