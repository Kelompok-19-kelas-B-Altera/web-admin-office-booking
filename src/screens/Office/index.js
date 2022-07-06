import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  EntriesAndSearchComponent,
  NavbarOffice,
  PaginationAndDescStatisticData,
} from "../../components";
import { handleEntries, handlePage, handleInputSearch } from "../../utils/redux/features/entriesAndPaginateSlice";


const Office = () => {
  const entries = useSelector((state) => state.entriesAndPaginationSlice.entries)
  const page = useSelector((state) => state.entriesAndPaginationSlice.page)
  const totalPage = useSelector((state) => state.entriesAndPaginationSlice.totalPage)
  const totalData = useSelector((state) => state.entriesAndPaginationSlice.totalData)
  const dispatch = useDispatch()
  // console.log(entries, page, totalPage, totalData)

  return (
    <ContentLayout>
      <ContentHeader title="office" />
      <ContentContainer>
        <NavbarOffice />
        <EntriesAndSearchComponent handleEntries={(e)=>{dispatch(handleEntries(e))}} handleButtonSearch={(e)=>{dispatch(handleInputSearch(e.target[0].value))}} />

        <div className="min-h-[339px]">
          <Outlet />
        </div>

        <PaginationAndDescStatisticData
          showingFrom={1}
          showingTo={entries}
          amountAllEntries={totalData}
          pageCount={totalPage}
          handlePagination={(e) => {
            dispatch(handlePage(e));
          }}
        />
      </ContentContainer>
    </ContentLayout>
  );
};

export default Office;
