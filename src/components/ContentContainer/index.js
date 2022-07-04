import React from "react";

const ContentContainer = ({ children }) => {
  return <main className="flex flex-col justify-between w-full h-[509px] bg-white p-3">{children}</main>;
};

export default ContentContainer;
