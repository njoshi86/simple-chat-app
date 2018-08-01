import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ChatRoom from '../../components/chatRoom'
import ChatRoomHeader from '../../components/chatRoomHeader'
import SendMessage from '../../components/sendMessage'
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
    fetchChatRoomUsers: PropTypes.func.isRequired,
    fetchChatRoomMessages: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired
  }
  static defaultProps = {
    chatRooms: [],
    chatRoomUsers: {},
    chatRoomMessages: {},
    currentUser: 'Ryan',
    fetchChatRoomUsers: () => {},
    fetchChatRoomMessages: () => {},
    sendMessage: () => {}
  }
  componentWillMount () {
    const { fetchChatRoomUsers, fetchChatRoomMessages, selectedChatRoomId } = this.props
    fetchChatRoomUsers(selectedChatRoomId)
    fetchChatRoomMessages(selectedChatRoomId)
  }
  componentDidUpdate (prevProps) {
    if (prevProps.selectedChatRoomId !== this.props.selectedChatRoomId) {
      const { fetchChatRoomUsers, fetchChatRoomMessages, selectedChatRoomId } = this.props
      fetchChatRoomUsers(selectedChatRoomId)
      fetchChatRoomMessages(selectedChatRoomId)
    }
  }
  sendMessage = (message) => {
    const { selectedChatRoomId, currentUser, sendMessage } = this.props
    return sendMessage(selectedChatRoomId, currentUser, message)
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
        <SendMessage
          sendMessage={this.sendMessage}
        />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    chatRooms: store.chat.chatRooms,
    chatRoomUsers: store.chat.chatRoomUsers,
    chatRoomMessages: store.chat.chatRoomMessages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatRoomUsers: (chatRoomId) => {
      ChatActions.fetchChatRoomUsers(chatRoomId, dispatch)
    },
    fetchChatRoomMessages: (chatRoomId) => {
      ChatActions.fetchChatRoomMessages(chatRoomId, dispatch)
    },
    sendMessage: (chatRoomId, name, message) => {
      return ChatActions.sendMessage(chatRoomId, name, message, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow)
