import React, { Component } from 'react'
import { View, Image } from 'react-native'
import styles from './HeaderComponentStyle'
import { Helpers } from 'App/Theme'

class Header extends Component {
  render() {
    return (
      <View style={[styles.header, Helpers.center, Helpers.fullWidth]}>
        <Image
          style={[styles.image, Helpers.fullSize]}
          source={require('../../Assets/Images/polywood.png')}
        />
      </View>
    )
  }
}

export default Header
