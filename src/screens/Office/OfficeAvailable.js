import React, { useEffect, useState } from "react";
import axiosInstance from "../../networks/apis";
import { useSelector, useDispatch } from "react-redux";
import {
  handleTotalData,
  handleTotalPage,
} from "../../utils/redux/features/entriesAndPaginateSlice";

const OfficeAvailable = () => {
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
              key: "fromDate",
              join: "scheduleList",
              operator: "BETWEEN",
              field_type: "DATE",
              value: `${date}-${month}-${year} ${hour}:${minute}:${second}`,
              value_to: `${date}-${month}-${tenMoreYears} ${hour}:${minute}:${second}`,
            },
            {
              key: "isBooked",
              join: "scheduleList",
              operator: "EQUAL",
              field_type: "BOOLEAN",
              value: false,
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
  console.log("listBuildings", listBuildings);
  console.log("listBuildingsSearched", listBuildingsSearched);

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
              key: "fromDate",
              join: "scheduleList",
              operator: "BETWEEN",
              field_type: "DATE",
              value: `${date}-${month}-${year} ${hour}:${minute}:${second}`,
              value_to: `${date}-${month}-${tenMoreYears} ${hour}:${minute}:${second}`,
            },
            {
              key: "isBooked",
              join: "scheduleList",
              operator: "EQUAL",
              field_type: "BOOLEAN",
              value: false,
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
        <h1 className="mr-[32px]">No</h1>
        <h1 className="mr-[32px] w-[332px] flex-1">Name</h1>
        <h1 className="mr-[32px] w-[250px] flex-1">Lokasi</h1>
        <h1 className="flex-1">Aksi</h1>
      </div>

      {/* Content */}
      <div className="min-h-[308px]">
<<<<<<< HEAD
        {listBuildings?.map((e, index) => (
          <div className="flex justify-self-auto text-base text-[#070723] mt-[12px]" key={index}>
            <p className="mr-[32px] w-[21px] my-auto text-center">{index + 1}</p>
            <div className="flex items-center w-[332px] mr-[32px] flex-1">
              <img
                src={e.images[e.images.length-1].image_url}
                alt="photo-profile"
                className="w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
              />
              <p className="w-[250px] capitalize">{e.building_name}</p>
            </div>
            <p className="mr-[32px] w-[250px] my-auto capitalize flex-1">{e.address}</p>
            <div className="flex gap-2 w-[200px] flex-1">
              <button className="min-w-[369px] w-full h-[43px] bg-[#197beb] rounded text-white">
                Pesan 
              </button>
            </div>
          </div>
        ))}
=======
        {!listBuildings || inputSearch ? (
          <>
            {listBuildingsSearched?.map((e, index) => {
              console.log("search");
              return (
                <div
                  className="flex justify-self-auto text-base text-[#070723] mt-[12px]"
                  key={index}
                >
                  <p className="mr-[32px] w-[21px] my-auto text-center">{index + 1}</p>
                  <div className="flex items-center w-[332px] mr-[32px] flex-1">
                    <img
                      src={e.images[e.images.length - 1]?.image_url}
                      alt="photo-profile"
                      className="w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
                    />
                    <p className="w-[250px] capitalize">{e.building_name}</p>
                  </div>
                  <p className="mr-[32px] w-[250px] my-auto capitalize flex-1">{e.address}</p>
                  <div className="flex gap-2 w-[200px] flex-1">
                    <button className="min-w-[369px] w-full h-[43px] bg-[#197beb] rounded text-white">
                      Pesan
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            {listBuildings?.map((e, index) => {
              console.log("load");
              return (
                <div
                  className="flex justify-self-auto text-base text-[#070723] mt-[12px]"
                  key={index}
                >
                  <p className="mr-[32px] w-[21px] my-auto text-center">{index + 1}</p>
                  <div className="flex items-center w-[332px] mr-[32px] flex-1">
                    <img
                      src={e.images[e.images.length - 1]?.image_url}
                      alt="photo-profile"
                      className="w-[50px] h-[50px] rounded-full object-cover mr-[32px]"
                    />
                    <p className="w-[250px] capitalize">{e.building_name}</p>
                  </div>
                  <p className="mr-[32px] w-[250px] my-auto capitalize flex-1">{e.address}</p>
                  <div className="flex gap-2 w-[200px] flex-1">
                    <button className="min-w-[369px] w-full h-[43px] bg-[#197beb] rounded text-white">
                      Pesan
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
>>>>>>> 7b135799eea2b99971ce582db320af6d43bf08c1
      </div>
      {/* Content */}
    </div>
  );
};

export default OfficeAvailable;
