import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './MovieComponentStyle'
import { Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'

class Movie extends Component {
  render() {
    return (
      <View style={[styles.movieContainer, Helpers.center]}>
        {this.props.image === '' ? (
          <Image
            style={[styles.image, Helpers.fill]}
            source={require('../../Assets/Images/clapper.png')}
          />
        ) : (
          <Image style={[styles.image, Helpers.fill]} source={{ uri: this.props.image }} />
        )}
        <Text style={styles.titleText}>{this.props.title.toUpperCase()}</Text>
      </View>
    )
  }
}

Movie.defaultProps = {
  title: 'Titre du film',
  image: '',
}

Movie.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
}

export default Movie
