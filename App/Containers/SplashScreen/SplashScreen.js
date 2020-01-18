import React from 'react'
import { StatusBar, View } from 'react-native'
import styles from './SplashScreenStyle'
import { ApplicationStyles, Colors, Helpers } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, Helpers.fillCenter]}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content"/>
        <View style={[ Helpers.center]}>
          <AppText style={ ApplicationStyles.title1}>POLYWOOD</AppText>
        </View>
      </View>
    )
  }
}
