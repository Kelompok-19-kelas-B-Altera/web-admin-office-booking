import { ContentHeader, ContentLayout, CardInfo, CardChat } from "../../components";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../networks/apis";
import {
  GET_CHAT_ROOM_USER_CONTAIN,
} from "../../networks/graphql/gql";
import { useQuery } from "@apollo/client";

const HomeDashboard = () => {
  const navigate = useNavigate()
  const [Total, setTotal] = useState(0);
  const [Available, setAvailable] = useState(0);
  const [Booked, setBooked] = useState(0);
  const [Users, setUsers] = useState(0);
  const {
    loading: chatRoomLoading,
    error: chatRoomError,
    data: chatRoomData,
  } = useQuery(GET_CHAT_ROOM_USER_CONTAIN, { pollInterval: 3000 });

  useEffect(() => {
    if(Cookies.get("token") === undefined){
      navigate("/login")
    }
  })

  useEffect(() => {
    axiosInstance
      .get("/api/v1/user/management", {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`
        }
      })
      .then((res) => {
        setUsers(res.data.data.length)
      })
      .catch((e) => {
        console.log(e)
      })

    axiosInstance
      .get("/api/v1/building", {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`
        }
      })
      .then((res) => {
        setTotal(res.data.data.length)
      })
      .catch((e) => {
        console.log(e)
      })

      axiosInstance
        .get("/api/v1/booking", {
          headers : {
            'Authorization' : `Bearer ${Cookies.get("token")}`
          }
        })
        .then((res) => {
          // console.log(res.data.data.length)
          setBooked(res.data.data.length)
        })
        .catch((e) => {
          console.log(e)
        })

      axiosInstance
        .post("/api/v1/building/search", { 
          "filters":[
            {
                "key": "isBooked",
                "join": "scheduleList",
                "operator": "EQUAL",
                "field_type": "BOOLEAN",
                "value": false
            }
          ],
          "sorts":[],
          "page":null,
          "size":null
        }, 
        {
          headers : {
            'Authorization' : `Bearer ${Cookies.get("token")}`
          }
        })
        .then((res) => {
          // console.log(res.data.data.content)
          setAvailable(res.data.data.content.length)
        })
        .catch((e) => {
          console.log(e)
        })
  },[])


  return(
    <ContentLayout>
      <ContentHeader/>
      <div className="flex justify-between gap-10">
        <CardInfo title={"Total Office"} color={"#4CAF50"} count={Total} logo={"Homes.svg"}/>
        <CardInfo title={"Available"} color={"#FF5958"} count={Available} logo={"Avali.svg"}/>
        <CardInfo title={"Booked"} color={"#FCAB4A"} count={Booked} logo={"Book.svg"}/>
        <CardInfo title={"User"} color={"#197BEB"} count={Users} logo={"Users.svg"}/>
      </div>
      <div className="w-[86vh] mt-8">
        <h5 className="font-semibold text-[24px] leading-[28px] mb-6">Obrolan Terbaru</h5>
        <div className="flex flex-col gap-3">
          <CardChat name={"Test aja"} from={"Zananda Aditya"} location={"Cilandak, Jakarta Selatan"} time={"08:01"} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
          <CardChat name={"Test aja"} from={"Zananda Aditya"} location={"Cilandak, Jakarta Selatan"} time={"08:01"} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
          <CardChat name={"Test aja"} from={"Zananda Aditya"} location={"Cilandak, Jakarta Selatan"} time={"08:01"} msg={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}/>
        </div>
      </div>
    </ContentLayout>
  )
}

export default HomeDashboard;