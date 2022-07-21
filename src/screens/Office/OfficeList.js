import React, { useEffect, useState } from "react";
import axiosInstance from "../../networks/apis";
import { useSelector, useDispatch } from "react-redux";
import {
  handleTotalData,
  handleTotalPage,
} from "../../utils/redux/features/entriesAndPaginateSlice";
import Cookies from "js-cookie";

const OfficeList = () => {
  let [listBuildings, setListBuildings] = useState();
  const [triggerRequestOnDelete, setTriggerRequestOnDelete] = useState(false)
  const entries = useSelector((state) => state.entriesAndPaginationSlice.entries);
  const page = useSelector((state) => state.entriesAndPaginationSlice.page);
  const inputSearch = useSelector((state) => state.entriesAndPaginationSlice.inputSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .post("/api/v1/building/search", {
        filters: [
          {
            key: "buildingName",
            join: "",
            operator: "LIKE",
            field_type: "STRING",
            value: inputSearch,
          },
        ],
        sorts: [],
        page: page,
        size: entries,
      })
      .then((res) => {
        // console.log(res.data.data);
        dispatch(handleTotalPage(res.data.data.totalPages));
        dispatch(handleTotalData(res.data.data.totalElements));
        setListBuildings(res.data.data.content);
      });
      console.log("triggered")
  }, [entries, page, triggerRequestOnDelete, inputSearch]);

  const handleDelete = (e) => {
    const id = Number(e.target.id);
    axiosInstance
      .delete(`/api/v1/building/${id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        console.log(res);
        setTriggerRequestOnDelete(!triggerRequestOnDelete)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-[10px]">
      <div className="flex text-base font-semibold text-[#070723]">
        <h1 className="mr-[32px]">No</h1>
        <h1 className="mr-[32px] w-[332px] flex-1">Name</h1>
        <h1 className="mr-[32px] w-[250px] flex-1">Lokasi</h1>
        <h1 className="flex-1">Keterangan</h1>
      </div>

      <div className="min-h-[308px]">
        {listBuildings?.map((element, index) => (
          <div
            className="flex justify-self-auto text-base text-[#070723] mt-[12px]"
            key={element.id}
          >
            <p className="mr-[32px] w-[21px] my-auto text-center">{index + 1}</p>
            <div className="flex items-center w-[332px] mr-[32px] flex-1">
              <img
                src={element.images[0]?.image_url}
                alt="photo-profile"
                className="w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
              />
              <p className="w-[250px] capitalize">{element.building_name}</p>
            </div>
            <p className="mr-[32px] w-[250px] my-auto capitalize flex-1">
              {`${element.address}, ${element.complex.city}`}
            </p>
            <div className="flex gap-2 w-[200px] flex-1">
              <button className="min-w-[180.5px] w-full h-[43px] bg-[#F3C319] rounded text-white">
                Edit
              </button>
              <button
                className="min-w-[180.5px] w-full h-[43px] bg-[#FF5958] rounded text-white"
                id={element.id}
                onClick={(e) => {
                  handleDelete(e);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeList;
