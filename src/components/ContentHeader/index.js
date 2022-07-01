import React from "react";

const ContentHeader = ({ title }) => {
  const pathUrlArr = window.location.pathname.split("/");

  return (
    <header className="w-full h-[52px] flex justify-between items-center px-3 bg-white mb-8">
      <h1 className="text-2xl font-semibold text-[#070723] capitalize">{title}</h1>
      <div className="flex">
        <p className={pathUrlArr[1] === "" ? "text-[#070723]" : "text-[#838391]"}>Dashboard</p>
        {pathUrlArr.slice(1).map((e) => (
          <div key={e}>
            {pathUrlArr[1] === "" ? (
              <></>
            ) : (
              <p className="capitalize">&nbsp;{`/ ${e.match("-") ? e.split("-").join(" ") : e}`}</p>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default ContentHeader;
