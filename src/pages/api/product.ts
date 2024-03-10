// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/utils/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

//Define the type of property
type Data = {
  status: boolean;
  statusCode: Number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //Fetch firebase
  const data = await retrieveData("products");
  res.status(200).json({ status: true, statusCode: 200, data });
}
