import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import UserInfo from '../../components/userInfo'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class ChatRoomsList extends Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedChatRoomId: props.chatRooms[0]['id']
    }
  }
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    selectChatRoom: PropTypes.func.isRequired
  }

  static defaultProps = {
    chatRooms: [],
    selectChatRoom: () => {}
  }
  render () {
    const { chatRooms, selectChatRoom } = this.props
    const { selectedChatRoomId } = this.state
    return (
      <List link className={cx('chatRoomsList')}>
        {chatRooms.map((chatRoom) => {
          return (
            <List.Item
              active={chatRoom['id'] === selectedChatRoomId}
              as='a'
              key={chatRoom['id']}
              onClick={() => {
                this.setState({
                  selectedChatRoomId: chatRoom['id']
                })
                selectChatRoom(chatRoom['id'])
              }}
              className={cx('chatRoomsListItem')}
              >
              {chatRoom.name}
            </List.Item>
          )
        })}
      </List>
    )
  }
}

class ChatRooms extends Component {
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    currentUser: PropTypes.string.isRequired,
    loginTime: PropTypes.string.isRequired,
    selectChatRoom: PropTypes.func.isRequired
  }
  static defaultProps = {
    chatRooms: [],
    currentUser: '',
    selectChatRoom: () => {}
  }
  render () {
    const { chatRooms, currentUser, selectChatRoom, loginTime } = this.props
    return (
      <div className={cx('chatRoomsListContainer')}>
        <UserInfo
          currentUser={currentUser}
          loginTime={loginTime}
        />
        <ChatRoomsList
          chatRooms={chatRooms}
          selectChatRoom={selectChatRoom}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    chatRooms: store.chat.chatRooms,
    currentUser: store.chat.currentUser,
    loginTime: store.chat.loginTime
  }
}

export default connect(
  mapStateToProps
)(ChatRooms)

export { ChatRoomsList }
