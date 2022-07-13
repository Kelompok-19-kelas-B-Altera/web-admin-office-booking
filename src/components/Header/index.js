import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axiosInstance from "../../networks/apis";
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const Header = ({ active, setActive }) => {
  let [profile, setProfile] = useState();
  let [buttonLogOut, setButtonLogOut] = useState(false);
  let navigate = useNavigate();
  const tokenDecoded = decodeToken(Cookies.get("token"));

  useEffect(() => {
    Cookies.get("token") !== null &&
      axiosInstance
        .get(`/api/v1/user/management/${decodeToken(Cookies.get("token"))?.id}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((res) => {
          setProfile(res.data.data.pic_url);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const handleToggleLogOut = () => {
    setButtonLogOut(!buttonLogOut);
  };

  const handleLogOut = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between bg-white pl-8 pr-9 py-3 relative">
      <div className="w-[11.5%] flex justify-between">
        <img src="/header/logo.svg" className="self-center h-[34px]" />
        <img
          src="/header/Group 29.svg"
          className={`h-4 w-4 self-center cursor-pointer ${active ? "" : "scale-[-1]"}`}
          onClick={() => setActive(!active)}
        />
      </div>
      <div
        className="flex gap-3 hover:cursor-pointer"
        onClick={() => {
          handleToggleLogOut();
        }}
      >
        <div className="h-[51px] w-[51px]">
          <img src={profile} className="h-full w-full object-cover rounded-full" />
        </div>
        <p className="self-center font-normal text-base">{tokenDecoded?.fullname}</p>
      </div>
      {buttonLogOut ? (
        <button
          className="absolute right-3 top-[69px] w-[130px] h-[48px] bg-white flex justify-center items-center text-[#197beb] gap-3 shadow-sm"
          onClick={() => {
            handleLogOut();
          }}
        >
          <img src="/header/leave.svg" alt="leave" />
          Keluar
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
