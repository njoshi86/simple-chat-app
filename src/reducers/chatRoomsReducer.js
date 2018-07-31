import objectAssign from 'object-assign'
import initialState from './initialState'

export default function chatRoomsReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CHAT_ROOMS':
      return objectAssign({}, state, {chatRooms: action.value})
    default:
      return state
  }
}
