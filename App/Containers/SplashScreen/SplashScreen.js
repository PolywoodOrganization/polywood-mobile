import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, Helpers.fillCenter]}>
        <View style={[styles.logo, Helpers.center]}>
          <Text>POLYWOOD</Text>
        </View>
      </View>
    )
  }
}
