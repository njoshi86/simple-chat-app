import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ChatWindow extends Component {
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
