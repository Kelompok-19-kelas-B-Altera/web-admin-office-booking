

const Header = ({active, setActive}) => {
  return(
    <div className="flex justify-between bg-white pl-8 pr-9 py-3">
      <div className="w-[11.5%] flex justify-between">
        <img src="/header/logo.svg" className="self-center h-[34px]"/>
        <img src="/header/Group 29.svg" 
            className={`h-4 w-4 self-center cursor-pointer ${active ? "" : "scale-[-1]"}`}
            onClick={() => setActive(!active)}
          />
      </div>
      <div className="flex gap-3">
        <div className="h-[51px] w-[51px]">
          <img src="https://picsum.photos/200" className="h-full w-full object-cover rounded-full"/>
        </div>
        <p className="self-center font-normal text-base">Admin</p>
      </div>
    </div>
  )
}

export default Header