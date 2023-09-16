import DashboardLayouts from "@/layout/DashboardLayout";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const DashboardLayout = async ({ children }) => {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signup");
  }

  return (
    <div className="w-full flex mt-10">
      <div className="w-[15%]">
        <DashboardLayouts />
      </div>
      <div className="w-[85%]  px-7">{children}</div>
    </div>
  );
};

export default DashboardLayout;