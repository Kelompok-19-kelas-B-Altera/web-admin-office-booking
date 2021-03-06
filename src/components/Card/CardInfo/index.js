

const CardInfo = ({color, title, count, logo}) => {

  return(
    <div className="w-full rounded-[10px] bg-white">
      <div className="flex justify-between px-6 py-7">
        <div className="flex flex-col justify-between">
          <div className="flex pb-6">
            <div className={"self-center rounded-full w-[10px] h-[10px] mr-1"} style={{ backgroundColor: color }}>
              
            </div>
            <p className="text-[16px] self-center leading-[18.75px] font-normal ">{title}</p>
          </div>
          <div className="">
            <p className="text-[48px] font-bold leading-[56.25px]">{count}</p>
          </div>
        </div>
        <div>
          <div className={`rounded-xl flex justify-center items-center p-3`} style={{ backgroundColor: color + "80" }}>
            <img src={"./card/" + logo} className="w-8 h-8" alt="logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo