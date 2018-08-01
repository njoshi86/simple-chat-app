import objectAssign from 'object-assign'
import initialState from './initialState'

export default function chatRoomsReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CHAT_ROOMS':
      return objectAssign({}, state, {chatRooms: action.value})
    case 'FETCH_CHAT_ROOM_USERS': {
      const chatRoomId = action.value['id']
      const copiedChatRoomUsers = {...state.chatRoomUsers}
      copiedChatRoomUsers[chatRoomId] = action.value['users']
      return objectAssign({}, state, { chatRoomUsers: copiedChatRoomUsers })
    }
    case 'FETCH_CHAT_ROOM_MESSAGES': {
      const chatRoomId = action['meta']['chatRoomId']
      const copiedChatRoomMessages = {...state.chatRoomMessages}
      copiedChatRoomMessages[chatRoomId] = action.value
      return objectAssign({}, state, { chatRoomMessages: copiedChatRoomMessages })
    }
    default:
      return state
  }
}
