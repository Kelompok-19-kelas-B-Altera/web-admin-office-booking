import React from "react";
import { useRef } from "react";

const EntriesAndSearchComponent = ({ handleEntries, handleButtonSearch }) => {
  const ref = useRef();

  const handleButtonSearchLocal = (e) => {
    e.preventDefault()
    handleButtonSearch(e)
  }
  return (
    <div className="flex justify-between mb-[24px]">
      <div className="flex gap-[6px] items-center relative text-sm">
        <p>Show</p>
        <div className="relative">
          <select
            name="entries"
            id="entries"
            ref={ref}
            defaultValue={5}
            onChange={(e) => {
              handleEntries(e);
            }}
            className="relative z-10 appearance-none w-[49px] h-[28px] bg-transparent border border-[#f1f1f1] rounded px-[10px] focus:outline-1 focus:outline-[#f1f1f1] focus:border"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="All">All</option>
          </select>
          <img src="/down.svg" alt="down" className="absolute top-[9.5px] right-[10px] z-0" />
        </div>
        <p>Entries</p>
      </div>

      <form onSubmit={(e)=>{handleButtonSearchLocal(e)}} className="flex gap-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[278px] h-[40px] border-2 border-[#F1F1F1] rounded py-[12px] pl-[46px]"
          />
          <img src="/search.svg" alt="search" className="absolute top-[8px] left-[10px]" />
        </div>
        <button type="submit" className="w-[92px] h-[40px] bg-[#197beb] rounded text-white text-base font-semibold">
          Cari
        </button>
      </form>
    </div>
  );
};

export default EntriesAndSearchComponent;
