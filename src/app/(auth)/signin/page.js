import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import SignInPage from "@/template/SignInPage";

const page = async () => {

    const session = await getServerSession(authOptions)
    if(session) redirect("/")

  return <SignInPage />;
};

export default page;
