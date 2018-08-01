import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ChatWindow from '../chatWindow'
import ChatRooms from '../chatRooms'
import classnames from 'classnames/bind'
import stylesheet from './styles.scss'
const cx = classnames.bind(stylesheet)
import ChatActions from '../../actions/chatActions'

class ChatApp extends Component {
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
      <div className={cx('chatApp')}>
        <Grid className={cx('chatAppGrid')}>
          <Grid.Column mobile={8} tablet={5} computer={3} className={cx('chatRoomGrid')}>
            {chatRooms.length > 0 && <ChatRooms
              selectChatRoom={this.selectChatRoom}
            />}
          </Grid.Column>
          <Grid.Column mobile={8} tablet={11} computer={13} className={cx('chatWindowGrid')}>
            {selectedChatRoomId !== null && <ChatWindow
              selectedChatRoomId={selectedChatRoomId}
            />}
          </Grid.Column>
        </Grid>
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
)(ChatApp)
