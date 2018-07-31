import ChatsProvider from '../data_providers/chats'

const ChatActions = {
  fetchChatRooms: () => ({
    type: 'FETCH_CHAT_ROOMS',
    promise: ChatsProvider.fetchChatRooms()
  })
}

export default ChatActions
