import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import ChatWindow from '../chatWindow'
import ChatRooms from '../chatRooms'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)
import ChatActions from '../../actions/chatActions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedChatRoomId: props.chatRooms.length > 0 ? props.chatRooms[0]['id'] : null
    }
  }
  static propTypes = {
    chatRooms: PropTypes.array.isRequired,
    fetchChatRooms: PropTypes.func.isRequired
  }
  static defaultProps = {
    chatRooms: []
  }

  componentDidUpdate () {
    if (this.state.selectedChatRoomId === null && this.props.chatRooms.length > 0) {
      this.setState({selectedChatRoomId: this.props.chatRooms[0]['id']})
    }
  }

  componentDidMount () {
    this.props.fetchChatRooms()
  }

  selectChatRoom = (id) => {
    this.setState({
      selectedChatRoomId: id
    })
  }
  render () {
    const { chatRooms } = this.props
    const { selectedChatRoomId } = this.state
    return (
      <div className={cx('login-form-container')}>
        <Form className={cx('login-form')}>
          <Form.Field>
            <input
              className={cx('login-form-input-field')}
              placeholder='Type your username...'
            />
          </Form.Field>
          <Button
            className={cx('login-form-submit-button')}
            fluid
            color='red'
            type='submit'
            floated=''>
            Join the DoorDash Chat!
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    chatRooms: store.chat.chatRooms
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChatRooms: () => {
      return ChatActions.fetchChatRooms(dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
