import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)
import ChatActions from '../../actions/chatActions'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: '',
      validUserName: false
    }
  }
  static propTypes = {
    currentUser: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired
  }
  static defaultProps = {
    loginUser: () => {}
  }

  updateUserName = (e) => {
    const userName = e.target.value
    if (userName !== this.state.currentUser) {
      this.setState({
        currentUser: userName,
        validUserName: userName.trim() !== ''
      })
    }
  }

  loginUser = () => {
    this.props.loginUser(this.state.currentUser)
  }

  componentDidMount () {
    if (this.props.currentUser !== '') {
      this.redirectToChatApp()
    }
  }

  componentDidUpdate () {
    if (this.props.currentUser !== '') {
      this.redirectToChatApp()
    }
  }

  redirectToChatApp = () => {
    this.props.history.push('/')
  }

  render () {
    const { currentUser, validUserName } = this.state
    return (
      <div className={cx('login-form-container')}>
        <Form className={cx('login-form')}>
          <Form.Field>
            <input
              value={currentUser}
              onChange={this.updateUserName}
              className={cx('login-form-input-field')}
              placeholder='Type your username...'
            />
          </Form.Field>
          <Button
            className={cx('login-form-submit-button')}
            disabled={!validUserName}
            fluid
            color='red'
            type='submit'
            onClick={this.loginUser}
            >
            Join the DoorDash Chat!
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.chat.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userName) => {
      return ChatActions.loginUser(userName, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
