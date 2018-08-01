import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import ReadOnlyMessage from '../readOnlyMessage'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)
import { TextArea, Button } from 'semantic-ui-react'

class SendMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: props.message,
      isValidMessage: false
    }
  }
  static propTypes = {
    sendMessage: PropTypes.func.isRequired,
    message: PropTypes.string
  }
  static defaultProps = {
    message: '',
    sendMessage: () => {}
  }
  onMessageChange = (e) => {
    const newMessage = e.target.value
    if (this.state.message.trim() !== newMessage.trim()) {
      this.setState({
        message: newMessage.trim(),
        isValidMessage: newMessage.trim() !== ''
      })
    }
  }

  render () {
    return (
      <div className={cx('send-message-container')}>
        <TextArea
          rows={2}
          placeholder='Type a message...'
          onChange={this.onMessageChange}
        />
        <Button
          primary
          disabled={!this.state.isValidMessage}
        >
          Send
        </Button>
      </div>
    )
  }
}

export default SendMessage
