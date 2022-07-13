import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivateRoot = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  
  useEffect(() => {
    !token && navigate("/login");
  }, []);

  return <Outlet />;
};

export default PrivateRoot;
