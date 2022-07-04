

const CardChat = ({name, location, from, msg, time}) => {
  return(
   <div className="w-full bg-white p-3 rounded">
    <div className="flex w-auto gap-3">
      <img
        src="https://picsum.photos/200"
        alt="office"
        className="w-[75px] h-[75px] rounded-full object-cover self-center"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <p className="font-bold text-[16px] leading-[18px] text-[#070723]">{name}</p>
          <p className="font-normal text-[8px] leading-[9px] text-[#070723]">{time}</p>
        </div>
        <div className="flex gap-[6px]">
          <img src="/chat/location-mini-black.svg" alt="loc"/>
          <p className="font-normal text-[12px] leading-[14px] text-[#070723]">{location}</p>
        </div>
        <div className="flex w-[65vh] gap-[6px]">
          <img src="https://picsum.photos/200" className="w-[16px] h-[16px] rounded-full self-center"/>
          <p className="truncate font-normal text-[10px] leading-[12px] text-[#070723]">{from} : {msg} </p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default CardChat;