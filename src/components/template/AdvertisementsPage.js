import Card from "@/modules/MyAdsPage/Card";
import React from "react";

const AdvertisementsPage = ({ data }) => {
  return (
    <div className="w-full flex gap-3 mb-4">
      <div className="w-[20%] p-10 border-2"></div>
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {!data.lenght ? (
          data.map((ads) => <Card key={ads._id} data={ads} />)
        ) : (
          <p className="text-red-700 bg-red-200 py-2 px-4 rounded-md">
            هیچ آگهی ثبت نشده است.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdvertisementsPage;
