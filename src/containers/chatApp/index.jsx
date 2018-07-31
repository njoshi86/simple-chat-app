import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ChatWindow from '../chatWindow'
import ChatRooms from '../chatRooms'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedChatRoom: props.chatRooms.length > 0 ? props.chatRooms[0]['id'] : null
    }
  }
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

  selectChatRoom = (id) => {
    this.setState({
      selectedChatRoom: id
    })
  }
  render () {
    const { chatRooms, chatRoomUsers, chatRoomMessages, currentUser } = this.props
    const { selectedChatRoom } = this.state
    return (
      <div className={cx('chatApp')}>
        <Grid className={cx('chatAppGrid')}>
          <Grid.Column mobile={8} tablet={5} computer={3} className={cx('chatRoomGrid')}>
            <ChatRooms
              selectChatRoom={this.selectChatRoom}
            />
          </Grid.Column>
          <Grid.Column mobile={8} tablet={11} computer={13} className={cx('chatWindowGrid')}>
            <ChatWindow
              chatRooms={chatRooms}
              chatRoomUsers={chatRoomUsers}
              chatRoomMessages={chatRoomMessages}
              currentUser={currentUser}
              selectedChatRoom={selectedChatRoom}
            />
          </Grid.Column>
      </Grid>
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
