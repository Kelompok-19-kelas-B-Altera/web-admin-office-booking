import { useEffect, useState } from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  InputTextField,
  InputTextArea,
  InputSelect,
  InputDate,
} from "../../components";
import axiosInstance from "../../networks/apis";
import Cookies from 'js-cookie';

const BookOffice = () => {
  const building = "SAMOFIS | Coworking Space | Virtual Office | Meeting Room"
  const address = "Jl. Cikini IV No.10, RT.15/RW.5, Cikini, Kec. Menteng"
  const lokasi = "Jakarta Pusat"

  const timeSetting = {hour : "2-digit" , minute : "2-digit", second : "2-digit", hour12: false};

  const options = [
    {label : "Lunas", value : "Lunas"},
    {label : "DP", value : "DP"},
  ]

  const [option, setoption] = useState(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");
  const [optionName, setOptionsName] = useState([])
  

  const optionTime = () => {
    const temp = []
    var jam = ""
    for (var i = 0; i < 25; i++){
      i < 10 ? jam =  "0" + i : jam = i 
      temp.push(
        {label : jam + ":00:00", value : jam},
      )
    }
    return temp
  }

  const [time, setTime] = useState(optionTime)

  useEffect(() => {
    axiosInstance
      .get("/api/v1/user/management", {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`,
        }
      }).then((res) => {
        // console.log(res.data.data.slice(1, res.data.data.length))
        const temp = res.data.data.slice(1, res.data.data.length).map((data) => {
          return {
            label : data.fullname,
            value : data.id
          }
        })
        setOptionsName(temp)
      }).catch((e) => {
        console.log(e)
      })
  }, [])

  const handleTimeChange = (date, value) => {
    try {
      date.setHours(value)
      date.setMinutes(0)
      date.setSeconds(0)
    } catch (e) {
      // console.log(e)
    } 
  }

  const Booking = () => {

    var firstDate = date1.toLocaleDateString("en-GB", timeSetting).replace(/,/g, '')
    firstDate = firstDate.replaceAll('/', '-')
    var secondDate = date2.toLocaleDateString("en-GB", timeSetting).replace(/,/g, '')
    secondDate = secondDate.replaceAll('/', '-')


    axiosInstance
      .post("/api/v1/schedule",{ 
        "from_date":firstDate,
        "until_date":secondDate,
        "ready":true,
        "booked":false,
        "id_building":1
      }, 
      {
        headers : {
          'Authorization' : `Bearer ${Cookies.get("token")}`
        }
      }).then((res) => {
        const idSchedule = res.data.data.id
        console.log(idSchedule)
        axiosInstance
          .post("/api/v1/booking" ,
          { 
            "status":true,
            "id_user":nama.value,
            "id_schedule":3
          }, 
          {
            headers : {
              'Authorization' : `Bearer ${Cookies.get("token")}`
            }
          })
          .then((res) => {
            console.log(res)
          })
          .catch((e) => {
            console.log(e)
          })
      }).catch((e) => {
        console.log(e)
      })
  }

  const conditionalFirstDate = (date) => {
    return date1.toLocaleDateString() === new Date(Date.now()).toLocaleDateString() ? new Date(Date.now()).getHours() : ""
  }

  const conditionalSecondDate = () => {
    return date1.toLocaleDateString() === date2.toLocaleDateString() ? date1.getHours() : ""
  }

  return(
    <ContentLayout>
      <ContentHeader title={"Data Pemesanan Kantor"}/>
      <ContentContainer>
        <div className="flex justify-between gap-[120px]">
          
          <div className="w-1/2 flex flex-col gap-3">
            <InputTextField label={"Nama"} disable={true} value={building}/>
            <InputSelect label={"Alamat"} disable={true} placeholder={address}/>
            <InputSelect label={"Lokasi"} disable={true} placeholder={lokasi}/>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            {/* old */}
            {/* <InputTextField label={"Nama Pemesan"} value={nama} setChange={setNama} placeholder={"Masukkan nama pemesan"}/> */}
            {/* new */}
            <InputSelect value={nama} setChange={setNama} options={optionName} label={"Nama Pemesan"} placeholder={"Pilih Nama"}/>
            <InputTextField label={"Nomor Telepon"} value={noHP} setChange={(e) => setNoHP(e.target.value)} placeholder={"Masukkan nomor telepon"}/>
            <InputSelect value={option} setChange={setoption} options={options} label={"Status Pembayaran"} placeholder={"Pilih Status"}/>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="">
            <p className="text-[16px] leading-[18px] font-semibold mb-3 text-center">Tanggal Pemesanan</p>
            <div className="flex gap-[15px]">
              <div className="flex flex-col gap-[6px] w-[250px]">
                <InputDate date={date1} setDate={setDate1}/>
                <InputDate date={date2} setDate={setDate2}/>
              </div>
              <div className="flex flex-col w-[250px]">
                <InputSelect placeholder={"Pilih Jam Mulai"} optionsDisable={(option) => option.value <= conditionalFirstDate()} setChange={(e) => handleTimeChange(date1, e.value)} options={time} padding={'1px'} border={"#07072370"}/>
                <InputSelect placeholder={"Pilih Jam Mulai"} optionsDisable={(option) => option.value <= conditionalSecondDate()} setChange={(e) => handleTimeChange(date2, e.value)} options={time} padding={'1px'} border={"#07072370"}/>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="py-[17px] rounded bg-[#197BEB] w-[336px]" onClick={() => {Booking()}}>
            <p className="font-bold text-[14px] leading-4 text-white" style={{ fontStyle : "normal" }}>Pesan Kantor</p>
          </button>
        </div>
      </ContentContainer>
    </ContentLayout>
  )
}

export default BookOffice; 