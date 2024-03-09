// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

//Define the type of property
type Data = {
  status: boolean;
  statusCode: Number;
  data: {
    id: number;
    name: string;
    price: number;
    size: string;
  }[]; //menandakan kalo array
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = [
    {
      id: 1,
      name: "Product 1",
      price: 10000,
      size: "xl",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20000,
      size: "xl",
    },
  ];
  res.status(200).json({ status: true, statusCode: 200, data });
}
