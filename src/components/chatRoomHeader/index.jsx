import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Header } from 'semantic-ui-react'
import { compact } from 'lodash'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class ChatRoomHeader extends Component {
  static propTypes = {
    chatRoomName: PropTypes.string.isRequired,
    chatRoomUsers: PropTypes.array.isRequired,
    currentUser: PropTypes.string.isRequired
  }

  static defaultProps = {
    chatRoomName: '',
    chatRoomUsers: [],
    currentUser: ''
  }
  getUserNames = (chatRoomUsers, currentUser) => {
    const otherUsers = chatRoomUsers.map((user) => {
      if (user !== currentUser) {
        return user
      }
    })
    return (
      <span>
        <span className={cx('current-user')}>{currentUser}</span>
        {otherUsers.length > 0 ? `, ${compact(otherUsers).join(', ')}` : ''}
      </span>
    )
  }
  render () {
    const { chatRoomName, chatRoomUsers, currentUser } = this.props
    return (
      <div className={cx('chat-room-header-container')}>
        <Header as='h2' textAlign={'center'}>{chatRoomName}</Header>
        <Header as='h4' textAlign={'center'}>{this.getUserNames(chatRoomUsers, currentUser)}</Header>
      </div>
    )
  }
}

export default ChatRoomHeader
