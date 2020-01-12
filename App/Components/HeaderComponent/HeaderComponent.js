import React, { Component } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import styles from './HeaderComponentStyle'
import { Helpers, Images, Metrics } from 'App/Theme'

class Header extends Component {

  render() {
    return (
      <View style={[styles.header, Helpers.center, Helpers.fullWidth]}>
        <Image
          style={[styles.image, Helpers.fullSize]}
          source={Images.logo}
        />
        <View style={styles.logoContainer}>
          <TouchableOpacity
          onPress={() => this.props.logout()}>
            <Image
              style={styles.logo}
              source={Images.standby}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.logo}
              source={Images.profile}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Header
