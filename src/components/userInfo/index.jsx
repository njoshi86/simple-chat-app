import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { Header } from 'semantic-ui-react'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)

class UserInfo extends Component {
  static propTypes = {
    currentUser: PropTypes.string.isRequired,
    loginTime: PropTypes.string.isRequired
  }

  static defaultProps = {
    currentUser: ''
  }
  render () {
    const { currentUser, loginTime } = this.props
    return (
      <div className={cx('user-info-container')}>
        <Header as='h2' textAlign={'left'} className={cx('user-name')}>{currentUser}</Header>
        <Header as='h5' textAlign={'left'} className={cx('user-login-time')}>{loginTime}</Header>
      </div>
    )
  }
}

export default UserInfo
