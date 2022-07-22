import { useState } from "react";
import CustomCalender from "../../Calender";

const InputDate = ({date, setDate, disable, range}) => {
  const [show, setShow ] = useState(false);
  
  return(
    <div className="w-full relative mt-[6px] mb-[6px]">
      <button className={`flex justify-between rounded border p-[10px] w-full ${disable ? "bg-[#F1F1F1]" : "bg-white border-[#070723]/50"}`} 
        disabled={disable} 
        onClick={() => setShow(!show)}>
        {
          date === null ?  
          <p className="self-center text-[#070723]/50 font-normal text-[14px] leading-4 pt-[1px]">Pilih Tanggal Mulai</p>
          :
          date.length > 0 ? 
          <p className='self-center font-normal text-[13.5px] leading-4 pt-[1px]'>
            {date[0].toLocaleDateString("en-GB")}
            &nbsp;-&nbsp;
            {date[1].toLocaleDateString("en-GB")}
          </p>
          :
          <p className="self-center font-normal text-[14px] leading-4 pt-[1px]">{date.toLocaleDateString("en-GB")}</p>
          
        }
        <img src="/calender/ic_baseline-date-range.svg" alt="logo" className="self-center"/>
      </button>
      {
        show && disable !== true ? 
        <div className="absolute left-[50%] translate-x-[-50%] z-50">
          {/* <button 
            className="absolute flex justify-center items-center right-0 w-8 h-8 bg-red-500 rounded-full translate-x-3 -translate-y-3"
            onClick={() => setShow(!show)}
          >
            <p className="text-white">X</p>
          </button> */}
          <CustomCalender setDate={setDate} selectRange={range}/>
        </div>
        :
        <></>
      }
    </div>
  )
}

InputDate.defaultProps = {
  date : new Date(),
  disable : false,
}

export default InputDate;