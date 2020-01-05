import React, { Component } from 'react'
import { Image, View } from 'react-native'
import styles from './MovieComponentStyle'
import { Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'
import AppText from 'App/Components/MyAppText/MyAppText'

class Movie extends Component {
  render() {
    return (
      <View style={[styles.movieContainer, Helpers.center]}>
        {this.props.image === '' ? (
          <Image
            style={[styles.image, Helpers.fill]}
            source={require('App/Assets/Images/clapper.png')}
          />
        ) : (
          <Image style={[styles.image, Helpers.fill]} source={{ uri: this.props.image }}/>
        )}
        <AppText style={styles.titleText}>{this.props.title.toUpperCase()}</AppText>
      </View>
    )
  }
}

Movie.defaultProps = {
  title: '',
  image: '',
}

Movie.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

export default Movie
