import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers, ApplicationStyles } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, Helpers.fillCenter]}>
        <View style={[ Helpers.center]}>
          <Text style={ ApplicationStyles.title1}>POLYWOOD</Text>
        </View>
      </View>
    )
  }
}
