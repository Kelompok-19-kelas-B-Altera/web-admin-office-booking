import React from "react";
import styles from "./Chat.module.css";
import { useState } from "react";
import { ContentHeader, ContentLayout } from "../../components";
import { useQuery, useMutation } from "@apollo/client";
import {
  GET_ALL_CHAT_ROOM,
  GET_CHAT_BY_ROOM_ID,
  GET_CHAT_ROOM_USER_CONTAIN,
  SEND_MESSAGE,
} from "../../networks/graphql/gql";
import { useEffect } from "react";

const Chat = () => {
  let [selected, setSelected] = useState(true);
  let [idChatRoom, setIdChatRoom] = useState(0);
  let [idButton, setIdButton] = useState(0);
  let [idTarget, setidTarget] = useState(0);
  let [idBuilding, setIdBuilding] = useState(0);
  let [message, setMessage] = useState("");
  let [dataBuilding, setDataBuilding] = useState({
    name: "",
    address: "",
    img_url: "",
  });

  // const { loading, error, data } = useQuery(GET_ALL_CHAT_ROOM);
  const {
    loading: chatRoomLoading,
    error: chatRoomError,
    data: chatRoomData,
  } = useQuery(GET_CHAT_ROOM_USER_CONTAIN, { pollInterval: 3000 });
  const {
    loading: chatLoading,
    error: chatError,
    data: chatData,
  } = useQuery(GET_CHAT_BY_ROOM_ID, { variables: { idChatRoom }, pollInterval: 3000 });
  const [sendMessage, { data: sendData, loading: sendLoading, error: sendError }] =
    useMutation(SEND_MESSAGE);

  console.log(chatRoomData);
  console.log(chatData);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({ variables: { idTarget, idBuilding, message } });
    setMessage("");
  };

  useEffect(() => {
    if (document.getElementById("scrollbar")) {
      return (document.getElementById("scrollbar").scrollTop =
        document.getElementById("scrollbar").scrollHeight);
    }
  }, [dataBuilding, chatData]);

  return (
    <ContentLayout>
      <ContentHeader title="chat" />
      <div className="flex gap-[32px] w-full h-[592px]">
        {/* leftside */}
        <div className="min-w-[242px] w-[242px] h-full bg-white">
          {chatRoomData?.getAllChatroomByUsersIdContaining?.map((e) => (
            <div key={e.id}>
              {/* box */}
              <div
                className={`flex gap-[17px] items-center p-[10px] text-[#1E1E1E] hover:cursor-pointer ${
                  idButton === e.id && "bg-[#dbe5f0]"
                }`}
                onClick={() => {
                  setIdChatRoom(e.id);
                  setIdBuilding(e.building.id);
                  setidTarget(e.user2.id);
                  setIdButton(e.id);
                  setDataBuilding({
                    name: e.building.name,
                    img_url: e.building.image,
                    address: e.building.address,
                  });
                }}
              >
                <img
                  src={e.building.image}
                  alt="office"
                  className="min-w-[45px] h-[45px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-[6px] w-full">
                  <div className="flex justify-between w-[160px]">
                    <h1 className="text-xs text-[#1E1E1E]">{e.building.name}</h1>
                    <p className="text-[8px] text-[#07072380]">07:59</p>
                  </div>
                  <div className="flex gap-[6px] text-[8px]">
                    <img src="/chat/location-mini-black.svg" alt="location" />
                    <p>{e.building.address}</p>
                  </div>
                  <div className="flex gap-[6px] items-center text-[10px] font-semibold">
                    <img
                      src="/login/bg.svg"
                      alt="user"
                      className="w-[16px] h-[16px] rounded-full object-cover"
                    />
                    <p>
                      {e.user2.fullname} : {e.lastChat.message}
                    </p>
                  </div>
                </div>
              </div>
              {/* box */}
            </div>
          ))}
        </div>
        {/* leftside */}

        {/* rightside */}
        <div className="min-w-[806px] w-full">
          {dataBuilding.name === "" ? (
            <p className="text-[#07072380] w-full h-full flex items-center justify-center">
              Anda belum memulai percakapan
            </p>
          ) : (
            <>
              <header className="flex gap-[14px] items-center py-[9.16px] mb-[23.61px]">
                <img
                  src={dataBuilding.img_url}
                  alt="office"
                  className="w-[57px] h-[57px] rounded-full object-cover"
                />
                <div>
                  <h1 className="text-base text-[#1E1E1E]">{dataBuilding.name}</h1>
                  <div className="flex gap-1 text-xs text-[#07072380]">
                    <img src="/chat/location.svg" alt="location" />
                    <p>{dataBuilding.address}</p>
                  </div>
                </div>
              </header>

              <main className="h-[450px] flex flex-col justify-between">
                <section id="scrollbar" className={`overflow-auto ${styles.scrollbar}`}>
                  {chatData?.getAllChatByChatroomId.map((e) => (
                    <div key={e.id}>
                      {e.sender.id !== "1" ? (
                        <>
                          {/* User */}
                          <div className="flex gap-3 mb-2">
                            <img
                              src={e.sender.image}
                              alt="user"
                              className="w-[32px] h-[32px] rounded-full object-cover"
                            />
                            <div className="max-w-[288px] rounded-md p-3 bg-white">
                              <h1 className="text-sm font-semibold text-[#1E1E1E] mb-[6px] capitalize">
                                {e.sender.fullname}
                              </h1>
                              <p className="text-sm text-[#1E1E1E]">{e.message}</p>
                            </div>
                          </div>
                          {/* User */}
                        </>
                      ) : (
                        <>
                          {/* Admin */}
                          <div className="flex justify-end gap-3 w-full mb-2">
                            <div className="max-w-[288px] rounded-md p-3 bg-[#197beb] text-white text-right">
                              <h1 className="text-sm font-semibold mb-[6px] capitalize">
                                {e.sender.fullname}
                              </h1>
                              <p className="text-sm">{e.message}</p>
                            </div>
                            <img
                              src={e.sender.image}
                              alt="admin"
                              className="w-[32px] h-[32px] rounded-full object-cover"
                            />
                          </div>
                          {/* Admin */}
                        </>
                      )}
                    </div>
                  ))}
                </section>

                <section className="relative w-full">
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="Ketik di sini"
                      className="w-full h-[59.57px] rounded text-base text-[#07072380] pl-[10px] pr-[60px]"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                    />
                    <button
                      type="submit"
                      className="absolute top-[10px] right-[10px] w-[40px] h-[40px] bg-[#197beb] rounded flex justify-center items-center"
                    >
                      <img src="/chat/send.svg" alt="send" />
                    </button>
                  </form>
                </section>
              </main>
            </>
          )}
        </div>
        {/* rightside */}
      </div>
    </ContentLayout>
  );
};

export default Chat;
