import React from "react";

const OfficeBooked = () => {
  return (
    <div className="p-[10px]">
      <div className="flex text-base font-semibold text-[#070723]">
        <h1 className="mr-[32px] w-[21px]">No</h1>
        <div className="flex mr-[32px] w-[282px] flex-1">
          <h1 className="mr-[32px] w-[50px]">Office</h1>
          <h1 className="w-[200px]">Name</h1>
        </div>
        <h1 className="mr-[32px] w-[200px] flex-1">Lokasi</h1>
        <h1 className="mr-[32px] w-[100px]">Start</h1>
        <h1 className="mr-[32px] w-[100px]">End</h1>
        <h1 className="mr-[32px] w-[100px]">Status Bayar</h1>
        <div className="w-[106px] m-auto">
          <h1 className="w-full flex justify-center items-center">Aksi</h1>
        </div>
      </div>

      <div className="min-h-[308px]">
        {/* Lunas */}
        <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
          <p className="mr-[32px] w-[21px] my-auto text-center">1</p>
          <div className="flex items-center w-[282px] mr-[32px] flex-1">
            <img
              src="/login/bg.svg"
              alt="photo-profile"
              className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
            />
            <p className="w-[250px] capitalize">Contoh nama</p>
          </div>
          <p className="mr-[32px] w-[200px] my-auto capitalize flex-1">Cilandak, Jakarta Selatan</p>
          <p className="mr-[32px] w-[100px] my-auto capitalize">Feb 10, 2022</p>
          <p className="mr-[32px] w-[100px] my-auto capitalize">Dec 10, 2022</p>
          <div className="mr-[32px] w-[100px] m-auto">
            <p className="mr-[32px] w-[67px] h-[27px] rounded-[100px] bg-[#4caf50] flex justify-center items-center text-base text-white my-auto capitalize">
              Lunas
            </p>
          </div>
          <div className="flex justify-center gap-2 w-[106px]">
            <button className="w-[98px] h-[43px] bg-[#F3C319] rounded text-white">Edit</button>
          </div>
        </div>
        {/* Lunas */}

        {/* DP */}
        <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
          <p className="mr-[32px] w-[21px] my-auto text-center">2</p>
          <div className="flex items-center w-[282px] mr-[32px] flex-1">
            <img
              src="/login/bg.svg"
              alt="photo-profile"
              className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
            />
            <p className="w-[250px] capitalize">Contoh nama</p>
          </div>
          <p className="mr-[32px] w-[200px] my-auto capitalize flex-1">Cilandak, Jakarta Selatan</p>
          <p className="mr-[32px] w-[100px] my-auto capitalize">Feb 10, 2022</p>
          <p className="mr-[32px] w-[100px] my-auto capitalize">Dec 10, 2022</p>
          <div className="mr-[32px] w-[100px] m-auto">
            <p className="mr-[32px] w-[67px] h-[27px] rounded-[100px] bg-[#ff5958] flex justify-center items-center text-base text-white my-auto capitalize">
              DP
            </p>
          </div>
          <div className="flex justify-center gap-2 w-[106px]">
            <button className="w-[98px] h-[43px] bg-[#F3C319] rounded text-white">Edit</button>
          </div>
        </div>
        {/* DP */}
      </div>
    </div>
  );
};

export default OfficeBooked;
