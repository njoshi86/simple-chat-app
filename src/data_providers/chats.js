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
    console.log('getting users');
    const apiUrl = `${config}/rooms/${roomId}`
    return axios(apiUrl)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      throw err.body
    })
  }
}

export default ChatsProvider
