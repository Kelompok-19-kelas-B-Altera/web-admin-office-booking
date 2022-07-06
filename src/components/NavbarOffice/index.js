import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarOffice = () => {
  let [trigerLoad, setTrigerLoad] = useState("");
  const navbarList = [
    {
      title: "Available Office",
      link: "available-office",
    },
    {
      title: "Booked Office",
      link: "booked-office",
    },
    {
      title: "Office List",
      link: "office-list",
    },
    {
      title: "History Office",
      link: "history-office",
    },
  ];

  // triger load, because the contentHeader component won't re-render when change url
  useEffect(() => {
    if (trigerLoad) {
      return window.location.reload();
    }
  }, [trigerLoad]);

  return (
    <div className="flex justify-between h-[39px] mb-[24px]">
      <div className="flex gap-[24px]">
        {navbarList.map((e, index) => (
          <NavLink
            to={e.link}
            onClick={() => {
              setTrigerLoad(e.link);
            }}
            key={index}
          >
            {({ isActive }) => (
              <div
                className={`${
                  isActive && "text-[#197BEB] border-b-2 border-[#197BEB]"
                } w-[133px] h-[39px] flex justify-center items-center text-base font-semibold text-[#070723] hover:cursor-pointer`}
              >
                {e.title}
              </div>
            )}
          </NavLink>
        ))}
      </div>

      {window.location.pathname === "/Office/available-office" && (
        <NavLink to="/Office/office-list/add-office">
          <button className="w-[130px] h-[39px] bg-[#197BEB] text-white rounded">
            Tambah Kantor
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default NavbarOffice;
