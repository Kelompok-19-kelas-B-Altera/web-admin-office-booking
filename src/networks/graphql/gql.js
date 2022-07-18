import { gql } from "@apollo/client";

export const GET_ALL_CHAT_ROOM = gql`
  query GetAllChatroom {
    getAllChatroom {
      id
      user1 {
        id
        fullname
        email
        image
      }
      user2 {
        id
        fullname
        email
        image
      }
      building {
        id
        name
        image
      }
      lastChat {
        id
        message
        date
      }
    }
  }
`;

export const GET_CHAT_ROOM_USER_CONTAIN = gql`
  query GetAllChatroomByUsersIdContains {
    getAllChatroomByUsersIdContaining(idUser: 1) {
      id
      user1 {
        id
        fullname
        email
        image
      }
      user2 {
        id
        fullname
        email
        image
      }
      building {
        id
        name
        image
      }
      lastChat {
        id
        message
        date
      }
    }
  }
`;

export const GET_CHAT_BY_ROOM_ID = gql`
  query GetAllChatByChatRoomId($idChatRoom: Int!) {
    getAllChatByChatroomId(idChatroom: $idChatRoom) {
      id
      message
      date
      sender {
        id
        fullname
        email
        image
      }
      target {
        id
        fullname
        email
        image
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendChat($idTarget: Int!, $idBuilding: Int!, $message: String!) {
    sendChat(idSender: 1, idTarget: $idTarget, idBuilding: $idBuilding, message: $message) {
      id
      message
      date
      chatroom {
        id
        user1 {
          id
          fullname
          email
        }
        user2 {
          id
          fullname
          email
        }
        building {
          id
          name
        }
      }
    }
  }
`;
