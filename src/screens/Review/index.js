import React from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  EntriesAndSearchComponent,
  PaginationAndDescStatisticData,
} from "../../components";

const Review = () => {
  return (
    <ContentLayout>
      <ContentHeader title="review" />
      <ContentContainer>
        <EntriesAndSearchComponent />
        <div className="flex flex-col gap-[21px] min-h-[395px]">
          <div className="flex gap-[40px] border border-[#F1F1F1] p-[12px]">
            <div className="flex gap-3 min-w-[220px]">
              <img
                src="/login/bg.svg"
                alt="office-image"
                width={50}
                height={50}
                className="min-w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <h1 className="text-base font-semibold text-[#070723] mb-[6px]">Gedung Jakarta</h1>
                <div className="flex gap-[6px]">
                  <img src="/review/location.svg" alt="location" />
                  <p className="text-xs text-[#070723]">Cilandak, Jakarta Selatan</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex mb-6">
                <img
                  src="/login/bg.svg"
                  alt="profile-image"
                  width={50}
                  height={50}
                  className="min-w-[50px] h-[50px] rounded-full object-cover"
                />
                <div className="flex justify-between w-full ml-3">
                  <div>
                    <h1 className="text-base font-semibold text-[#070723]">Zananda Aditya</h1>
                    <div className="flex gap-[6px]">
                      <img src="/review/star.svg" alt="star" />
                      <img src="/review/star.svg" alt="star" />
                      <img src="/review/star.svg" alt="star" />
                      <img src="/review/star.svg" alt="star" />
                      <img src="/review/white-star.svg" alt="white-star" />
                    </div>
                  </div>
                  <p className="text-base text-[#000000]">08.01</p>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente aperiam iusto
                quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quas, autem
                architecto harum obcaecati corrupti perferendis optio molestiae nesciunt recusandae!
              </p>
              <button className="w-full flex justify-end" onClick={(e)=>{console.log("delete")}}>
                <img
                  src="/review/delete.svg"
                  alt="delete"
                  width={16}
                  height={19}
                  className="mt-[26px]"
                />
              </button>
            </div>
          </div>
        </div>

        <PaginationAndDescStatisticData
          showingFrom={1}
          showingTo={5}
          amountAllEntries={20}
          pageCount={5}
          handlePagination={(e) => {
            console.log(e);
          }}
        />
      </ContentContainer>
    </ContentLayout>
  );
};

export default Review;
