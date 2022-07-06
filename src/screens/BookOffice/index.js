import { useState } from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentLayout,
  InputTextField,
  InputTextArea,
  InputSelect,
  InputDate,
  CustomCalender
} from "../../components";

const BookOffice = () => {
  const [date1, setDate1] = useState(null);
  const [date2, setDate2] = useState(null);
  // console.log(date)

  return(
    <ContentLayout>
      <ContentHeader title={"Data Pemesanan Kantor"}/>
      <ContentContainer>
        <div className="flex justify-between gap-[120px]">
          
          <div className="w-1/2 flex flex-col gap-3">
            <InputTextField label={"Nama"} disable={true} value={"Ini Hanya Dummy"}/>
            <InputSelect label={"Nama"} disable={true} placeholder={"Ini Hanya Dummy"}/>
            <InputSelect label={"Nama"} disable={true} placeholder={"Ini Hanya Dummy"}/>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <InputTextField label={"Nama Pemesan"} placeholder={"Masukkan nama pemesan"}/>
            <InputTextField label={"Nomor Telepon"} placeholder={"Masukkan nomor telepon"}/>
            <InputSelect label={"Status Pembayaran"} placeholder={"Pilih Status"}/>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="">
            <p className="text-[16px] leading-[18px] font-semibold mb-3 text-center">Tanggal Pemesanan</p>
            {/* <CustomCalender selectRange={false}/> */}
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
      </ContentContainer>
    </ContentLayout>
  )
}

export default BookOffice; 