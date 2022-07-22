import { useEffect, useState } from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  InputTextField,
  InputSelect,
} from "../../components";
import axiosInstance from "../../networks/apis";
import Cookies from 'js-cookie';
import { useNavigate, useParams } from "react-router-dom";

const BookOffice = () => {
  var navigate = useNavigate()
  let { buildingID } = useParams();
  const [BuildingName, setBuildingName] = useState("")
  const [BuildingAddress, setBuildingAddress] = useState("")
  const [BuildingLokasi, setBuildingLokasi] = useState("")

  const [options, setoptions] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [nama, setNama] = useState(null);
  const [noHP, setNoHP] = useState("");
  const [optionName, setOptionsName] = useState([]);
  const [buttonActive, setButtonActive] = useState(false);
  const [error, setError] = useState([])
  

  useEffect(() => {
    axiosInstance
      .get("/api/v1/user/management", {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`,
        }
      }).then((res) => {
        const temp = res.data.data.slice(1, res.data.data.length).map((data) => {
          return {
            label : data.fullname,
            value : data.id
          }
        })
        setOptionsName(temp)
      }).catch((e) => {
        var errorMsg = [...error]
        errorMsg.push("Get All User Failed : " +e.message)
        setError(errorMsg)
        console.log(e)
      })
  }, [])
  
  useEffect(() => {
    
    axiosInstance
    .get("/api/v1/building/" + buildingID)
    .then((res) => {
      var schedule = []
      schedule = res.data.data.schedules.map((data) => {
        return {
          value : data.id,
          label : "FROM : " + formatingDate(data.from_date) + " | TO : " + formatingDate(data.until_date)
        }
      })
      setoptions(schedule)
      setBuildingName(res.data.data.building_name)
      setBuildingAddress(res.data.data.address)
      setBuildingLokasi(res.data.data.complex.city)
    })
    .catch((e) => {
      var errorMsg = [...error]
      errorMsg.push("Get Building Failed : " +e.message)
      setError(errorMsg)
      console.log(e)
    })
  }, [])

  const formatingDate = (value) => {
    var temp, date, time
    var i = 0
    
    while (value[i] !== " "){
      i++
    }

    temp = value.slice(0, i)
    date = temp.split("-")
    time = value.slice(i+1, value.length)
    
    const newDate = new Date(+date[2], +date[1] - 1, date[0])
    
    return (newDate.getDate() + " " + newDate.toLocaleString('default', { month: 'long' }) + " " + newDate.getFullYear() + " " + time)
    

  }


  const Booking = () => {
    
    axiosInstance
      .post("/api/v1/booking" ,
      { 
        "id_user":nama.value,
        "id_schedule":selectedOption.value
      }, 
      {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`
        }
      })
      .then((res) => {
        console.log(res)

        navigate("/Office/booked-office")
      })
      .catch((e) => {
        var errorMsg = [...error]
        errorMsg.push("Booking Failed : " +e.message)
        setError(errorMsg)
      })
  }

  useEffect(() => {
    if(noHP.length >= 12 && selectedOption !== null && nama !== null){
      setButtonActive(true)
    } else {
      setButtonActive(false)
    }
  }, [nama, noHP, selectedOption])


  return(
    <ContentLayout>
      <ContentHeader title={"Data Pemesanan Kantor"}/>
      <ContentContainer>
        <div className="flex justify-between gap-[120px]">
          
          <div className="w-1/2 flex flex-col gap-3">
            <InputTextField label={"Nama"} disable={true} value={BuildingName}/>
            <InputTextField label={"Alamat"} disable={true} placeholder={BuildingAddress}/>
            <InputSelect label={"Lokasi"} disable={true} placeholder={BuildingLokasi}/>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <InputSelect value={nama} setChange={setNama} options={optionName} label={"Nama Pemesan"} placeholder={"Pilih Nama"}/>
            <InputTextField label={"Nomor Telepon"} value={noHP} setChange={(e) => setNoHP(e.target.value)} placeholder={"Masukkan nomor telepon"}/>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-[55%]">
            <p className="text-[16px] leading-[18px] font-semibold mb-3 text-center">Periode Tersedia</p>
            <div className="flex gap-[15px]">
              <InputSelect value={selectedOption} options={options} setChange={setSelectedOption} placeholder={"Pilih Periode"}/>
            </div>
          </div>
        </div>
        {
          error.length > 0 ? 
          <div className="flex justify-center">
            <div>
              {
                error.map((data, index) => (
                  <p key={index}>{data}</p>
                ))
              }
            </div>
          </div> 
          : ""
        }
        <div className="flex justify-center mt-8">
          <button className={`py-[17px] rounded ${buttonActive ? "bg-[#197BEB]" : "bg-[#197BEB]/50"}  w-[336px]`} disabled={buttonActive ? false : true} onClick={() => {Booking()}}>
            <p className="font-bold text-[14px] leading-4 text-white" style={{ fontStyle : "normal" }}>Pesan Kantor</p>
          </button>
        </div>
      </ContentContainer>
    </ContentLayout>
  )
}

export default BookOffice; 