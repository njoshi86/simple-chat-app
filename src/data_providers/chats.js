const config = 'http://localhost:3001/api'
const ChatsProvider = {
  fetchChatRooms: () => {
    const apiUrl = `${config}/rooms`
    return fetch(apiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      if (response.status !== 200) {
        return
      }
      return response.json().then((data) => {
        return data
      })
    })
    .catch((err) => { throw err.body })
  }
}

export default ChatsProvider
