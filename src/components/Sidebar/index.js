import { useState } from "react";
import { NavLink } from "react-router-dom";


const Sidebar = ({active}) => {

  const sidebar = [
    {
      img : "/sidebar/Homes.svg",
      title : "Dashboard",
      link : "/",
      count : 0,
    },
    {
      img : "/sidebar/Chats.svg",
      title : "Chat",
      link : "/Chat",
      count : 21,
    },
    {
      img : "/sidebar/Office.svg",
      title : "Office",
      link : "/Office",
      count : 0,
    },
    {
      img : "/sidebar/review.svg",
      title : "Review",
      link : "/Review",
      count : 0,
    },
    {
      img : "/sidebar/user.svg",
      title : "User",
      link : "/User",
      count : 0,
    },
  ]

  return(
    <div className={`bg-white h-full w-[16%] pt-10 ${active ? "flex" : "hidden"}`}> 
      <div className="w-full">
        {
          sidebar.map((data, index) => (
            <NavLink to={data.link}>
            {({ isActive }) => (
              <div className={`${isActive ? "border-l-4 border-[#197BEB]" : "border-l-4 border-white"}  flex gap-3 py-3 px-8 mb-3`}>  
                <img src={data.img}/>
                <div className="flex justify-between w-full">
                  <p className={`text-[14px] leading-[16px] self-center ${isActive ? "text-[#197BEB]" : "text-black"} ]`}>{data.title}</p>
                  <p className={data.count != 0 ? "block rounded-full bg-[#197BEB] text-white text-[10px] leading-3 font-semibold px-3 py-1 self-center" : "hidden"}>{data.count}</p>
                </div>
              </div>
            )}
            </NavLink>

          ))
        }
      </div>
    
    </div>
  )
}

export default Sidebar;
