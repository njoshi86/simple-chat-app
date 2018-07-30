import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import ChatWindow from '../chatWindow'
import ChatRooms from '../chatRooms'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class ChatApp extends Component {
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    chatRoomUsers: PropTypes.object.isRequired,
    chatRoomMessages: PropTypes.object.isRequired,
    currentUser: PropTypes.string.isRequired
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
    currentUser: 'Ryan'
  }
  render () {
    const { chatRooms, chatRoomUsers, chatRoomMessages, currentUser } = this.props
    return (
      <div className={cx('chatApp')}>
        <div className={cx('chatRoomsListContainer')}>
          <ChatRooms />
        </div>
        <div className={cx('chatWindowContainer')}>
          <ChatWindow
            chatRooms={chatRooms}
            chatRoomUsers={chatRoomUsers}
            chatRoomMessages={chatRoomMessages}
            currentUser={currentUser}
          />
        </div>
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

export default ChatApp
