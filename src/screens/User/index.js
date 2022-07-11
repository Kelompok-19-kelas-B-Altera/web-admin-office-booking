import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import axiosInstance from "../../networks/apis";
import {
  ContentHeader,
  EntriesAndSearchComponent,
  ContentContainer,
  PaginationAndDescStatisticData,
  ContentLayout,
} from "../../components";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  handleEntries,
  handleInputSearch,
  handlePage,
  handleTotalData,
  handleTotalPage,
} from "../../utils/redux/features/entriesAndPaginateSlice";

const User = () => {
  const ref = useRef();
  const [triggerRequestOnDelete, setTriggerRequestOnDelete] = useState(false);
  const entries = useSelector((state) => state.entriesAndPaginationSlice.entries);
  const page = useSelector((state) => state.entriesAndPaginationSlice.page);
  const inputSearch = useSelector((state) => state.entriesAndPaginationSlice.inputSearch);
  const totalPage = useSelector((state) => state.entriesAndPaginationSlice.totalPage);
  const totalData = useSelector((state) => state.entriesAndPaginationSlice.totalData);
  const dispatch = useDispatch();

  let [users, setUsers] = useState();

  useEffect(() => {
    axiosInstance
      .post(
        "/api/v1/user/management/search",
        {
          filters: [
            {
              key: "username",
              operator: "LIKE",
              field_type: "STRING",
              value: inputSearch,
            },
          ],
          sorts: [],
          page: page,
          size: entries,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        dispatch(handleTotalPage(res.data.data.totalPages));
        dispatch(handleTotalData(res.data.data.totalElements));
        setUsers(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [entries, page, inputSearch]);

  const handleDelete = (e) => {
    const id = Number(e.target.id);
    axiosInstance
      .delete(`/api/v1/user/management/${id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        console.log(res);
        setTriggerRequestOnDelete(!triggerRequestOnDelete);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContentLayout>
      <ContentHeader title="user" />

      <ContentContainer>
        <EntriesAndSearchComponent
          handleEntries={(e) => {
            dispatch(handleEntries(e));
          }}
          handleButtonSearch={(e) => {
            dispatch(handleInputSearch(e.target[0].value));
          }}
        />
        <div className="p-[10px] min-h-[308px]">
          <div className="flex text-base font-semibold text-[#070723]">
            <h1 className="mr-[32px]">No</h1>
            <h1 className="mr-[32px] w-[50px]">User</h1>
            <h1 className="mr-[32px] w-[300px] flex-1">Fullname</h1>
            <h1 className="mr-[32px] w-[300px] flex-1">Email</h1>
            <h1>Keterangan</h1>
          </div>

          <div className="min-h-[308px] overflow-auto">
            {users?.map((e, index) => {
              return (
                <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
                  <p className="mr-[32px] w-[21px] text-center">{index + 1}</p>
                  <img
                    src={e.pic_url}
                    alt="photo-profile"
                    className="w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
                  />
                  <p className="mr-[32px] w-[300px] flex-1 capitalize">{e.fullname}</p>
                  <p className="mr-[32px] w-[300px] flex-1">{e.email}</p>
                  <button
                    className="w-[92px] h-[43px] bg-[#FF5958] rounded text-white"
                    id={e.id}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
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

export default User;
