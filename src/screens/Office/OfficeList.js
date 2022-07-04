import React from "react";

const OfficeList = () => {
  return (
    <div className="p-[10px]">
      <div className="flex text-base font-semibold text-[#070723]">
        <h1 className="mr-[32px]">No</h1>
        <h1 className="mr-[32px] w-[332px] flex-1">Name</h1>
        <h1 className="mr-[32px] w-[250px] flex-1">Lokasi</h1>
        <h1 className="flex-1">Keterangan</h1>
      </div>

      <div className="min-h-[308px]">
        <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
          <p className="mr-[32px] w-[21px] my-auto text-center">1</p>
          <div className="flex items-center w-[332px] mr-[32px] flex-1">
            <img
              src="/login/bg.svg"
              alt="photo-profile"
              className="w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
            />
            <p className="w-[250px] capitalize">Contoh nama</p>
          </div>
          <p className="mr-[32px] w-[250px] my-auto capitalize flex-1">Cilandak, Jakarta Selatan</p>
          <div className="flex gap-2 w-[200px] flex-1">
            <button className="min-w-[180.5px] w-full h-[43px] bg-[#F3C319] rounded text-white">Edit</button>
            <button className="min-w-[180.5px] w-full h-[43px] bg-[#FF5958] rounded text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeList;
