import { useState } from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  InputTextField,
  InputTextArea,
  InputSelect,
  InputDate,
} from "../../components";

const BookOffice = () => {
  const options = [
    {label : "Lunas", value : "Lunas"},
    {label : "DP", value : "DP"},
  ]

  const [option, setoption] = useState(null);
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  const [nama, setNama] = useState("");
  const [noHP, setNoHP] = useState("");


  return(
    <ContentLayout>
      <ContentHeader title={"Data Pemesanan Kantor"}/>
      <ContentContainer>
        <div className="flex justify-between gap-[120px]">
          
          <div className="w-1/2 flex flex-col gap-3">
            <InputTextField label={"Nama"} disable={true} value={"Ini Hanya Dummy"}/>
            <InputSelect label={"Alamat"} disable={true} placeholder={"Ini Hanya Dummy"}/>
            <InputSelect label={"Lokasi"} disable={true} placeholder={"Ini Hanya Dummy"}/>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <InputTextField label={"Nama Pemesan"} value={nama} setChange={setNama} placeholder={"Masukkan nama pemesan"}/>
            <InputTextField label={"Nomor Telepon"} value={noHP} setChange={setNoHP} placeholder={"Masukkan nomor telepon"}/>
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
                <InputSelect placeholder={"Pilih Jam Mulai"} padding={'1px'} border={"#07072370"}/>
                <InputSelect placeholder={"Pilih Jam Mulai"} padding={'1px'} border={"#07072370"}/>
              </div>
            </div>

          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="py-[17px] rounded bg-[#197BEB] w-[336px]" onClick={() => console.log("Ke Klik")}>
            <p className="font-bold text-[14px] leading-4 text-white" style={{ fontStyle : "normal" }}>Pesan Kantor</p>
          </button>
        </div>
      </ContentContainer>
    </ContentLayout>
  )
}

export default BookOffice; 