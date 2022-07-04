import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import axiosInstance from "../../networks/apis";
import {
  ContentHeader,
  EntriesAndSearchComponent,
  ContentContainer,
  PaginationAndDescStatisticData,
  ContentLayout
} from "../../components";

const User = () => {
  const ref = useRef();

  return (
    <ContentLayout>
      <ContentHeader title="user" />

      <ContentContainer>
        <EntriesAndSearchComponent
          handleEntries={(e) => {
            console.log(e.target.value);
          }}
          handleButtonSearch={(e) => {
            console.log(e.target[0].value);
          }}
        />
        <div className="p-[10px]">
          <div className="flex text-base font-semibold text-[#070723]">
            <h1 className="mr-[32px]">No</h1>
            <h1 className="mr-[32px] w-[50px]">User</h1>
            <h1 className="mr-[32px] w-[300px] flex-1">Fullname</h1>
            <h1 className="mr-[32px] w-[300px] flex-1">Email</h1>
            <h1>Keterangan</h1>
          </div>

          <div className="h-[308px] overflow-auto">
            <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
              <p className="mr-[32px] w-[21px] text-center">1</p>
              <img
                src="/login/bg.svg"
                alt="photo-profile"
                className="w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
              />
              <p className="mr-[32px] w-[300px] flex-1 capitalize">contoh nama</p>
              <p className="mr-[32px] w-[300px] flex-1">contohemail@gmail.com</p>
              <button className="w-[92px] h-[43px] bg-[#FF5958] rounded text-white">Delete</button>
            </div>
          </div>
        </div>

        <PaginationAndDescStatisticData
          showingFrom={1}
          showingTo={5}
          amountAllEntries={29}
          pageCount={20}
          handlePagination={(e) => {
            console.log(e.selected);
          }}
        />
      </ContentContainer>
    </ContentLayout>

  );
};

export default User;
