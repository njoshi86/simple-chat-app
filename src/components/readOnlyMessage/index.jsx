import React from 'react'
import { Segment, Label } from 'semantic-ui-react'
import { PropTypes } from 'prop-types'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

const ReadOnlyMessage = (props) => {
  const { writer, message, messageId, currentUser } = props
  const ownMessage = writer.toLowerCase() === currentUser.toLowerCase()
  const color = ownMessage ? 'red' : 'green'
  const float = ownMessage ? 'right' : 'left'
  return (
    <div className={cx('message')} key={messageId}>
      <Segment
        inverted={ownMessage}
        compact
        color={color}
        floated={float}
        className={cx('message-segment', {'receivedMessageSegment': !ownMessage})}
        >
          {message}
      </Segment>
      <Label
        className={cx('message-writer')}
      >
        {!ownMessage ? writer : ''}
      </Label>
    </div>
  )
}

ReadOnlyMessage.propTypes = {
  writer: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  messageId: PropTypes.string.isRequired,
  currentUser: PropTypes.string.isRequired
}

export default ReadOnlyMessage
