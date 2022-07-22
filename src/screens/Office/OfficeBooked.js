import React, { useEffect, useState } from "react";
import axiosInstance from "../../networks/apis";
import { useSelector, useDispatch } from "react-redux";
import {
  handleTotalData,
  handleTotalPage,
} from "../../utils/redux/features/entriesAndPaginateSlice";

const OfficeBooked = () => {
  let [listBuildings, setListBuildings] = useState([]);
  let [listBuildingsSearched, setListBuildingsSearched] = useState([]);
  const [triggerRequestOnDelete, setTriggerRequestOnDelete] = useState(false);
  const entries = useSelector((state) => state.entriesAndPaginationSlice.entries);
  const page = useSelector((state) => state.entriesAndPaginationSlice.page);
  const inputSearch = useSelector((state) => state.entriesAndPaginationSlice.inputSearch);
  const dispatch = useDispatch();

  const d = new Date();
  const date = String(d.getDate()).length < 2 ? `${"0" + d.getDate()}` : `${d.getDate()}`;
  const month = String(d.getMonth()).length < 2 ? `${"0" + d.getMonth()}` : `${d.getMonth()}`;
  const year =
    String(d.getFullYear()).length < 2 ? `${"0" + d.getFullYear()}` : `${d.getFullYear()}`;
  const hour = String(d.getHours()).length < 2 ? `${"0" + d.getHours()}` : `${d.getHours()}`;
  const minute =
    String(d.getMinutes()).length < 2 ? `${"0" + d.getMinutes()}` : `${d.getMinutes()}`;
  const second =
    String(d.getSeconds()).length < 2 ? `${"0" + d.getSeconds()}` : `${d.getSeconds()}`;
  const tenMoreYears =
    String(d.getFullYear()).length < 2
      ? `${"0" + d.getFullYear() + 10}`
      : `${d.getFullYear() + 10}`;

  useEffect(() => {
    if (!inputSearch || !listBuildingsSearched) {
      axiosInstance
        .post("/api/v1/building/search", {
          filters: [
            {
              key: "isBooked",
              join: "scheduleList",
              operator: "EQUAL",
              field_type: "BOOLEAN",
              value: true,
            },
          ],
          sorts: [],
          page: page,
          size: entries,
        })
        .then((res) => {
          // console.log(res.data.data.content);
          dispatch(handleTotalPage(res.data.data.totalPages));
          dispatch(handleTotalData(res.data.data.totalElements));
          setListBuildings(res.data.data.content);
          // res.data.data.content.forEach((element) => {
          //   if (!listBuildings.includes(element)) {
          //     setListBuildings([...listBuildings, element]);
          //   }
          // });
        });
      // console.log("triggered");
    } else {
      setListBuildings([]);
    }
    console.log("not");
  }, [entries, page, triggerRequestOnDelete, inputSearch]);

  useEffect(() => {
    console.log("yes");
    if (!listBuildings || inputSearch) {
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
            {
              key: "isBooked",
              join: "scheduleList",
              operator: "EQUAL",
              field_type: "BOOLEAN",
              value: true,
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
          setListBuildingsSearched(res.data.data.content);
        });
      console.log("triggered");
    } else {
      setListBuildingsSearched([]);
    }
  }, [entries, page, triggerRequestOnDelete, inputSearch]);

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
        {!listBuildings || inputSearch ? (
          <>
            {listBuildingsSearched.map((e, index) => (
              <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
                <p className="mr-[32px] w-[21px] my-auto text-center">{index + 1}</p>
                <div className="flex items-center w-[282px] mr-[32px] flex-1">
                  <img
                    src={e.images[e.images.length - 1]?.image_url}
                    alt="photo-profile"
                    className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
                  />
                  <p className="w-[250px] capitalize">{e.building_name}</p>
                </div>
                <p className="mr-[32px] w-[200px] my-auto capitalize flex-1">{e.address}</p>
                <p className="mr-[32px] w-[100px] my-auto capitalize">Feb 10, 2022</p>
                <p className="mr-[32px] w-[100px] my-auto capitalize">Dec 10, 2022</p>
                <div className="mr-[32px] w-[100px] m-auto">
                  <p className="mr-[32px] w-[67px] h-[27px] rounded-[100px] bg-[#4caf50] flex justify-center items-center text-base text-white my-auto capitalize">
                    Lunas
                  </p>
                </div>
                <div className="flex justify-center gap-2 w-[106px]">
                  <button className="w-[98px] h-[43px] bg-[#F3C319] rounded text-white">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {listBuildings.map((e, index) => (
              <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
                <p className="mr-[32px] w-[21px] my-auto text-center">{index + 1}</p>
                <div className="flex items-center w-[282px] mr-[32px] flex-1">
                  <img
                    src={e.images[e.images.length - 1]?.image_url}
                    alt="photo-profile"
                    className="min-w-[50px] min-h-[50px] w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
                  />
                  <p className="w-[250px] capitalize">{e.building_name}</p>
                </div>
                <p className="mr-[32px] w-[200px] my-auto capitalize flex-1">{e.address}</p>
                <p className="mr-[32px] w-[100px] my-auto capitalize">Feb 10, 2022</p>
                <p className="mr-[32px] w-[100px] my-auto capitalize">Dec 10, 2022</p>
                <div className="mr-[32px] w-[100px] m-auto">
                  <p className="mr-[32px] w-[67px] h-[27px] rounded-[100px] bg-[#4caf50] flex justify-center items-center text-base text-white my-auto capitalize">
                    Lunas
                  </p>
                </div>
                <div className="flex justify-center gap-2 w-[106px]">
                  <button className="w-[98px] h-[43px] bg-[#F3C319] rounded text-white">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
        {/* DP */}
        {/* <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]">
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
        </div> */}
        {/* DP */}
      </div>
    </div>
  );
};

export default OfficeBooked;
