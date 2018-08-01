import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Header } from 'semantic-ui-react'
import moment from 'moment'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.loginTimeInterval = null
    this.state = {
      loginTimeDiff: this.getLoginTimeDiff(props.loginTime)
    }
  }
  static propTypes = {
    currentUser: PropTypes.string.isRequired,
    loginTime: PropTypes.string.isRequired
  }

  static defaultProps = {
    currentUser: ''
  }
  clearLoginTimeInterval = () => {
    if (this.loginTimeInterval !== null) {
      clearInterval(this.loginTimeInterval)
      this.loginTimeInterval = null
    }
  }
  startInterval = () => {
    this.clearLoginTimeInterval()
    this.loginTimeInterval = setInterval(this.updateTimeDiff, 61*1000)
  }
  componentDidMount() {
    this.startInterval()
  }
  componentWillUnmount () {
    this.clearLoginTimeInterval()
  }
  updateTimeDiff = () => {
    this.setState({
      loginTimeDiff: this.getLoginTimeDiff(this.props.loginTime)
    }, () => {
    })
  }
  getLoginTimeDiff = (loginTime) => {
    const currentTimeUTC = moment(moment()).format('YYYY-MM-DD hh:mm:ss Z')
    const diffInMinutes = parseInt(moment(currentTimeUTC).diff(loginTime, 'minutes'), 10)
    if (diffInMinutes < 60) {
      return `Online for ${diffInMinutes > 0 ? diffInMinutes : 1} minutes`
    } else {
      const diffInHours = parseInt(moment(currentTimeUTC).diff(loginTime, 'hours'), 10)
      return `Online for ${diffInHours} hours and ${diffInMinutes - (diffInHours * 60)} minutes`
    }
  }
  render () {
    const { currentUser } = this.props
    return (
      <div className={cx('user-info-container')}>
        <Header as='h2' textAlign={'left'} className={cx('user-name')}>{currentUser}</Header>
        <Header as='h5' textAlign={'left'} className={cx('user-login-time')}>{this.state.loginTimeDiff}</Header>
      </div>
    )
  }
}

export default UserInfo
