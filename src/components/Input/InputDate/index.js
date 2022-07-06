import { useState } from "react";
import CustomCalender from "../../Calender";

const InputDate = ({date, setDate}) => {
  const [show, setShow ] = useState(false);
  
  return(
    <div className="relative mt-[6px] mb-[6px]">
      <button className="flex justify-between rounded border border-[#070723]/50 bg-white border-[#F1F1F1] p-[10px] w-full" onClick={() => setShow(!show)}>
        {
          date === null ?  
          <p className="self-center text-[#070723]/50 font-normal text-[14px] leading-4">Pilih Tanggal Mulai</p>
          :
          <p className="self-center text-[#070723]/50 font-normal text-[14px] leading-4">{date.toDateString()}</p>
        }
        <img src="/calender/ic_baseline-date-range.svg" alt="logo" className="self-center"/>
      </button>
      {
        show ? 
        <div className="absolute left-[50%] translate-x-[-50%] z-50">
          {/* <button 
            className="absolute flex justify-center items-center right-0 w-8 h-8 bg-red-500 rounded-full translate-x-3 -translate-y-3"
            onClick={() => setShow(!show)}
          >
            <p className="text-white">X</p>
          </button> */}
          <CustomCalender setDate={setDate}/>
        </div>
        :
        <></>
      }
    </div>
  )
}

InputDate.defaultProps = {
  date : new Date()
}

export default InputDate;