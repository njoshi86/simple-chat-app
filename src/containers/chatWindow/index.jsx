import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ChatWindow extends Component {
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    chatRoomUsers: PropTypes.object.isRequired,
    chatRoomMessages: PropTypes.object.isRequired
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
        {name: 'Ryan', message: 'ayyyyy', id: 'gg35545', reaction: null},
        {name: 'Nick', message: 'lmao', id: 'yy35578', reaction: null},
        {name: 'Danielle', message: 'leggooooo', id: 'hh9843', reaction: null}
      ],
      1: [
        {name: 'Jessye', message: 'ayy', id: 'ff35278', reaction: null}
      ]
    }
  }
  render () {
    return (
      <div>
        This will show chat window
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
