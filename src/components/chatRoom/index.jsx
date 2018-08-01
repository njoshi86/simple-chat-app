import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import ReadOnlyMessage from '../readOnlyMessage'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class ChatRoom extends Component {
  static propTypes = {
    chatRoomMessages: PropTypes.array.isRequired,
    currentUser: PropTypes.string.isRequired
  }

  static defaultProps = {
    chatRoomMessages: [],
    currentUser: ''
  }
  render () {
    const { chatRoomMessages, currentUser } = this.props
    return (
      <div className={cx('message-container')}>
        {
          chatRoomMessages.map((messageObj) => {
            return (
              <ReadOnlyMessage
                writer={messageObj.name}
                message={messageObj.message}
                messageId={messageObj.id}
                currentUser={currentUser}
                key={messageObj.id}
              />
            )
          })
        }
      </div>
    )
  }
}

export default ChatRoom
