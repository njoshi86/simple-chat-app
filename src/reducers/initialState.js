import moment from 'moment'
export default {
  chatRooms: [],
  chatRoomUsers: {},
  chatRoomMessages: {},
  currentUser: 'Ryan',
  loginTime: moment(moment()).format('YYYY-MM-DDThh:mm:ss')
}
