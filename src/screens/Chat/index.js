import React from "react";
import { useState } from "react";
import { ContentHeader, ContentLayout } from "../../components";

const Chat = () => {
  let [selected, setSelected] = useState(true);
  
  return (
    <ContentLayout>
      <ContentHeader title="chat" />
      <div className="flex gap-[32px] w-full h-[592px]">
        {/* leftside */}
        <div className="min-w-[242px] w-[242px] h-full bg-white">
          {/* box */}
          <div className="flex gap-[17px] items-center p-[10px] text-[#1E1E1E]">
            <img
              src="/login/bg.svg"
              alt="office"
              className="min-w-[45px] h-[45px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-[6px] w-full">
              <div className="flex justify-between w-[160px]">
                <h1 className="text-xs text-[#1E1E1E]">Abang Jakarta</h1>
                <p className="text-[8px] text-[#07072380]">07:59</p>
              </div>
              <div className="flex gap-[6px] text-[8px]">
                <img src="/chat/location-mini-black.svg" alt="location" />
                <p>Cilandak, Jakarta Selatan</p>
              </div>
              <div className="flex gap-[6px] items-center text-[10px] font-semibold">
                <img
                  src="/login/bg.svg"
                  alt="user"
                  className="w-[16px] h-[16px] rounded-full object-cover"
                />
                <p>User : Lorem ipsum...</p>
              </div>
            </div>
          </div>
          {/* box */}

          {/* box */}
          <div
            className={`flex gap-[17px] items-center p-[10px] text-[#1E1E1E] ${
              selected && "bg-[#dbe5f0]"
            }`}
          >
            <img
              src="/login/bg.svg"
              alt="office"
              className="min-w-[45px] h-[45px] rounded-full object-cover"
            />
            <div className="flex flex-col gap-[6px] w-full">
              <div className="flex justify-between w-[160px]">
                <h1 className="text-xs text-[#1E1E1E]">Abang Jakarta</h1>
                <p className="text-[8px] text-[#07072380]">07:59</p>
              </div>
              <div className="flex gap-[6px] text-[8px]">
                <img src="/chat/location-mini-black.svg" alt="location" />
                <p>Cilandak, Jakarta Selatan</p>
              </div>
              <div className="flex gap-[6px] items-center text-[10px] font-semibold">
                <img
                  src="/login/bg.svg"
                  alt="user"
                  className="w-[16px] h-[16px] rounded-full object-cover"
                />
                <p>User : Lorem ipsum...</p>
              </div>
            </div>
          </div>
          {/* box */}
        </div>
        {/* leftside */}

        {/* rightside */}
        <div className="min-w-[806px] w-full">
          <header className="flex gap-[14px] items-center py-[9.16px] mb-[23.61px]">
            <img
              src="/login/bg.svg"
              alt="office"
              className="w-[57px] h-[57px] rounded-full object-cover"
            />
            <div>
              <h1 className="text-base text-[#1E1E1E]">GoWork Tower</h1>
              <div className="flex gap-1 text-xs text-[#07072380]">
                <img src="/chat/location.svg" alt="location" />
                <p>Tebet, Jakarta Selatan</p>
              </div>
            </div>
          </header>

          <main className="h-[450px] flex flex-col justify-between">
            <section>
              {/* User */}
              <div className="flex gap-3">
                <img
                  src="/login/bg.svg"
                  alt="user"
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
                <div className="max-w-[288px] rounded-md p-3 bg-white">
                  <h1 className="text-sm font-semibold text-[#1E1E1E] mb-[6px] capitalize">User</h1>
                  <p className="text-sm text-[#1E1E1E]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum atque
                    deleniti.
                  </p>
                </div>
              </div>
              {/* User */}

              {/* Admin */}
              <div className="flex justify-end gap-3 w-full">
                <div className="max-w-[288px] rounded-md p-3 bg-[#197beb] text-white text-right">
                  <h1 className="text-sm font-semibold mb-[6px] capitalize">Admin</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum atque
                    deleniti.
                  </p>
                </div>
                <img
                  src="/login/bg.svg"
                  alt="admin"
                  className="w-[32px] h-[32px] rounded-full object-cover"
                />
              </div>
              {/* Admin */}
            </section>

            <section className="relative w-full">
              <input
                type="text"
                placeholder="Ketik di sini"
                className="w-full h-[59.57px] rounded text-base text-[#07072380] pl-[10px] pr-[60px]"
              />
              <button className="absolute top-[10px] right-[10px] w-[40px] h-[40px] bg-[#197beb] rounded flex justify-center items-center">
                <img src="/chat/send.svg" alt="send" />
              </button>
            </section>
          </main>
        </div>
        {/* rightside */}
      </div>
    </ContentLayout>
  );
};

export default Chat;
