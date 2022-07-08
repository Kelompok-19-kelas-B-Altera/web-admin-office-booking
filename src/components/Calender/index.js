import Calendar from "react-calendar";
import React from "react";

const Back = () => {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      <img src="/calender/calendar-arrow.svg" alt="<" />
    </div>
  );
};
const Next = () => {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      <img src="/calender/calendar-arrow.svg" alt="<" className="rotate-180" />
    </div>
  );
};

const CustomCalender = ({ date, setDate, selectRange }) => {
  // const [date, setDate] = useState(new Date());
  
  const formatShortWeekday = (locale, date) => ["S", "M", "T", "W", "T", "F", "S"][date.getDay()];

  return (
    <>
      <Calendar
        onChange={setDate}
        // value={date}
        // defaultValue={date}
        selectRange={selectRange}
        formatShortWeekday={formatShortWeekday}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        nextLabel={<Next />}
        prevLabel={<Back />}
      />
    </>
  );
};

CustomCalender.defaultProps = {
  selectRange : false
}

export default CustomCalender;