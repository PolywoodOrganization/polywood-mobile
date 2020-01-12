import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './ProfileScreenStyle'

class ProfileScreen extends React.Component {

  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <AppText style={styles.title}>{this.props.me.firstname} {this.props.me.lastname}</AppText>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  me: state.auth.currentUser,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  null,
)(ProfileScreen)
