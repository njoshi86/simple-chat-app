import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ChatRoom from '../../components/chatRoom'
import ChatRoomHeader from '../../components/chatRoomHeader'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class ChatWindow extends Component {
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    chatRoomUsers: PropTypes.object.isRequired,
    chatRoomMessages: PropTypes.object.isRequired,
    currentUser: PropTypes.string.isRequired,
    selectedChatRoom: PropTypes.number.isRequired
  }
  static defaultProps = {
    chatRooms: [
      {name: 'Tea Chats', id: 0},
      {name: 'Coffee Chats', id: 1}
    ],
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
    selectedChatRoom: 0
  }
  render () {
    const { chatRooms, chatRoomUsers, chatRoomMessages, currentUser, selectedChatRoom } = this.props
    if (!selectedChatRoom) {
      return null
    }
    return (
      <div className={cx('chatWindow')}>
        <ChatRoomHeader
          chatRoomName={chatRooms[selectedChatRoom]['name']}
          chatRoomUsers={chatRoomUsers[chatRooms[selectedChatRoom]['id']]}
          currentUser={currentUser}
        />
        <ChatRoom
          chatRoomMessages={chatRoomMessages[selectedChatRoom]}
          currentUser={currentUser}
        />
      </div>
    )
  }
}

// const mapStateToProps = (store) => {
//   return {
//     user: store.user || {},
//     config: store.config || {},
//     buyerAssets: store.buyerAssets || {},
//     sellerAssets: store.sellerAssets || {}
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {}
//   // return {
//   //   savedAssets: (params) => {
//   //     dispatch(savedAssets(params))
//   //   },
//   //   savedSearches: (params) => {
//   //     dispatch(savedSearches(params))
//   //   }
//   // }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(chatWindow)

export default ChatWindow
