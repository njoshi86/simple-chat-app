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
  }
}

export default ChatActions
