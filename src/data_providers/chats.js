const config = 'http://localhost:3001/api'
const ChatsProvider = {
  fetchChatRooms: () => {
    const apiUrl = `${config}/rooms`
    return fetch(apiUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then((response) => {
      const { body } = response
      console.log('body: ', body);
      return body.result || {}
    })
    .catch((err) => { throw err.body })
  }
}

export default ChatsProvider
