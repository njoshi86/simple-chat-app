import axios from 'axios'
const config = 'http://localhost:3001/api'
const ChatsProvider = {
  fetchChatRooms: () => {
    const apiUrl = `${config}/rooms`
    return axios(apiUrl)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      throw err.body
    })
  },
  fetchChatRoomUsers: (roomId) => {
    const apiUrl = `${config}/rooms/${roomId}`
    return axios(apiUrl)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      throw err.body
    })
  },
  fetchChatRoomMessages: (roomId) => {
    const apiUrl = `${config}/rooms/${roomId}/messages`
    return axios(apiUrl)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      throw err.body
    })
  },
  sendMessage: (roomId, name, message) => {
    const apiUrl = `${config}/rooms/${roomId}/messages`
    const postBody = {
      'name': name,
      'message': message
    }
    return axios(apiUrl, {
      method: 'POST',
      data: postBody
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      throw err.body
    })
  }
}

export default ChatsProvider
