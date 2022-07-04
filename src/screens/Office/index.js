import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  EntriesAndSearchComponent,
  NavbarOffice,
  PaginationAndDescStatisticData,
} from "../../components";

const Office = () => {
  return (
    <ContentLayout>
      <ContentHeader title="office" />
      <ContentContainer>
        <NavbarOffice />
        <EntriesAndSearchComponent />

        <div className="min-h-[339px]">
          <Outlet />
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

export default Office;
