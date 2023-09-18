import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import Ads from "@/models/Ads";

const POST = async (req) => {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      phone,
      realEstate,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json();

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب کاربری حود شوید!" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد!" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realEstate ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطفا تمام موارد را به صورت کامل پر کنید!" },
        { status: 400 }
      );
    }

    const newAds = await Ads.create({
      title,
      description,
      location,
      phone,
      realEstate,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
};

export { POST };