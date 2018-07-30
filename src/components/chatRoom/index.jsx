import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Segment } from 'semantic-ui-react'
import './styles.scss'

class ChatRoom extends Component {
  static propTypes = {
    chatRoomMessages: PropTypes.array.isRequired,
    currentUser: PropTypes.string.isRequired
  }

  static defaultProps = {
    chatRoomMessages: [],
    currentUser: ''
  }
  // static defaultProps = {
  //   chatRoomMessages: {
  //     0: [
  //       {name: 'Ryan', message: 'ayyyyy', id: 'gg35545', reaction: null},
  //       {name: 'Nick', message: 'lmao', id: 'yy35578', reaction: null},
  //       {name: 'Danielle', message: 'leggooooo', id: 'hh9843', reaction: null}
  //     ],
  //     1: [
  //       {name: 'Jessye', message: 'ayy', id: 'ff35278', reaction: null}
  //     ]
  //   },
  //   currentUser: 'Ryan'
  // }
  render () {
    const { chatRoomMessages, currentUser } = this.props
    return (
      <div>
        {`currentUser: ${currentUser}`}
        {
          chatRoomMessages.map((message) => {
            const ownMessage = message.name.toLowerCase() === currentUser.toLowerCase()
            const textAlign = ownMessage ? 'right' : 'left'
            const color = ownMessage ? 'red' : 'green'
            const float = ownMessage ? 'right' : 'left'
            return (
              <div className={'message'} key={message.id}>
                <Segment
                  inverted
                  compact
                  color={color}
                  floated={float}
                  className={`message-segment`}
                  >
                    {message.message}
                </Segment>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default ChatRoom
