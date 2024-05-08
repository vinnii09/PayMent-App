import { NextResponse } from "next/server";
import db from "@repo/db/client";

export const GET = async () => {
  await db.user.create({
    data: {
      email: "asdncih",
      name: "adsadspojwph",
      number: "8788799",
      password: "bcooh",
    },
  });
  return NextResponse.json({
    message: "hi there",
  });
};
