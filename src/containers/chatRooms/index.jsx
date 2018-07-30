import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

const ChatRoomsList = (props) => {
  const { chatRooms } = props
  return (
    <List link>
      {chatRooms.map((chatRoom, index) => {
        return (
          <List.Item active={index === 0} as='a' key={chatRoom.id}>{chatRoom.name}</List.Item>
        )
      })}
    </List>
  )
}

ChatRoomsList.propTypes = {
  chatRooms: PropTypes.array.isRequired
}

ChatRoomsList.defaultProps = {
  chatRooms: []
}

class ChatRooms extends Component {
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    currentUser: PropTypes.string.isRequired
  }
  static defaultProps = {
    chatRooms: [
      {name: 'Tea Chats', id: 0},
      {name: 'Coffee Chats', id: 1}
    ],
    currentUser: 'Ryan'
  }
  render () {
    const { chatRooms, currentUser } = this.props
    return (
      <div className={cx('chatRoomsList')}>
        <ChatRoomsList
          chatRooms={chatRooms}
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

export default ChatRooms
export { ChatRoomsList }
