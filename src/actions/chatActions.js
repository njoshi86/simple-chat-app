import ChatsProvider from '../data_providers/chats'

const ChatActions = {
  fetchChatRooms: (dispatch) => (
    ChatsProvider.fetchChatRooms()
    .then((value) => {
      dispatch({
        type: 'FETCH_CHAT_ROOMS',
        value: value
      })
    })
  ),
  fetchChatRoomUsers: (chatRoomId, dispatch) => {
    return (
      ChatsProvider.fetchChatRoomUsers(chatRoomId)
      .then((value) => {
        dispatch({
          type: 'FETCH_CHAT_ROOM_USERS',
          value: value
        })
      })
    )
  },
  fetchChatRoomMessages: (chatRoomId, dispatch) => {
    return (
      ChatsProvider.fetchChatRoomMessages(chatRoomId)
      .then((value) => {
        dispatch({
          type: 'FETCH_CHAT_ROOM_MESSAGES',
          meta: {chatRoomId},
          value: value
        })
      })
    )
  },
  sendMessage: (chatRoomId, name, message, dispatch) => {
    return ChatsProvider.sendMessage(chatRoomId, name, message)
    .then((value) => {
      dispatch({
        type: 'SEND_CHAT_ROOM_MESSAGES',
        meta: {chatRoomId},
        value: value
      })
    })
  }
}

export default ChatActions
