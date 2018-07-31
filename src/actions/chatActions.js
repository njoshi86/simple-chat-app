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
  )
}

export default ChatActions
