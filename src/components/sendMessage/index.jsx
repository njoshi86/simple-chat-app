import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import ReadOnlyMessage from '../readOnlyMessage'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)
import { TextArea, Button, Grid } from 'semantic-ui-react'

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
        <Grid className={cx('send-message-grid')}>
          <Grid.Column mobile={12} tablet={11} computer={13} className={cx('text-area-grid')} textAlign='center'>
            <TextArea
              rows={2}
              placeholder='Type a message...'
              onChange={this.onMessageChange}
              className={cx('send-message-text-area')}
            />
          </Grid.Column>
          <Grid.Column mobile={4} tablet={5} computer={3} className={cx('send-message-btn-grid')} textAlign='center'>
            <Button
              primary
              disabled={!this.state.isValidMessage}
              className={cx('send-message-btn')}
            >
              Send
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default SendMessage
