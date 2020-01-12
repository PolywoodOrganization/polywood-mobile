import React from 'react'
import { StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Metrics } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './ProfileScreenStyle'

class ProfileScreen extends React.Component {

  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content"/>
        <View style={Metrics.mediumVerticalMargin}>
          <AppText style={styles.title}>{this.props.me.firstname} {this.props.me.lastname}</AppText>
          <AppText style={[styles.smallTitle, Helpers.textCenter]}>{this.props.me.login}</AppText>
        </View>
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
