import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ChatRoom from '../../components/chatRoom'
import ChatRoomHeader from '../../components/chatRoomHeader'
import ChatActions from '../../actions/chatActions'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class ChatWindow extends Component {
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    chatRoomUsers: PropTypes.object.isRequired,
    chatRoomMessages: PropTypes.object.isRequired,
    currentUser: PropTypes.string.isRequired,
    selectedChatRoomId: PropTypes.number.isRequired,
    fetchChatRoomUsers: PropTypes.func.isRequired
  }
  static defaultProps = {
    chatRooms: [],
    chatRoomUsers: {
      0: ['Ryan','Nick', 'Danielle'],
      1: ['Jessye']
    },
    chatRoomMessages: {
      0: [
        {name: 'Ryan', message: 'This message is important. This message is important. This message is important. This message is important. This message is important.', id: 'gg35545', reaction: null},
        {name: 'Nick', message: 'This message is important. This message is important. This message is important.', id: 'yy35578', reaction: null},
        {name: 'Danielle', message: 'This message is important.', id: 'hh9843', reaction: null}
      ],
      1: [
        {name: 'Jessye', message: 'ayy', id: 'ff35278', reaction: null}
      ]
    },
    currentUser: 'Ryan',
    fetchChatRoomUsers: () => {}
  }
  componentWillMount () {
    const { fetchChatRoomUsers, selectedChatRoomId } = this.props
    fetchChatRoomUsers(selectedChatRoomId)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.selectedChatRoomId !== this.props.selectedChatRoomId) {
      const { fetchChatRoomUsers, selectedChatRoomId } = this.props
      fetchChatRoomUsers(selectedChatRoomId)
    }
  }
  render () {
    const { chatRooms, chatRoomUsers, chatRoomMessages, currentUser, selectedChatRoomId } = this.props
    const chatRoomName = chatRooms.find((chatRoom) => {
      return (chatRoom['id'] === selectedChatRoomId)
    })['name']
    return (
      <div className={cx('chatWindow')}>
        <ChatRoomHeader
          chatRoomName={chatRoomName}
          chatRoomUsers={chatRoomUsers[selectedChatRoomId]}
          currentUser={currentUser}
        />
        <ChatRoom
          chatRoomMessages={chatRoomMessages[selectedChatRoomId]}
          currentUser={currentUser}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    chatRooms: store.chat.chatRooms,
    chatRoomUsers: store.chat.chatRoomUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatRoomUsers: (chatRoomId) => {
      ChatActions.fetchChatRoomUsers(chatRoomId, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow)

// export default ChatWindow
