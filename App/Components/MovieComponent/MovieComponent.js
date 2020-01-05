import React, { Component } from 'react'
import { Image, View } from 'react-native'
import styles from './MovieComponentStyle'
import { Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'
import AppText from 'App/Components/MyAppText/MyAppText'
import { MovieService } from '../../Services/MovieService'
import MoviesActions from '../../Stores/Movies/Actions'
import { connect } from 'react-redux'

class Movie extends Component {

  constructor(props) {
    super(props)
    this.state= {
      image: '',
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    MovieService.getImage(this.props.token, this.props.id).then((data) => {
      this.setState({image: data, loading: false})
      }
    ).catch((error) => {console.log({...error})})
  }

  render() {
    return (
      <View style={[styles.movieContainer, Helpers.center]}>
        {this.state.image === '' || this.state.loading ? (
          <Image
            style={[styles.image, Helpers.fill]}
            source={require('App/Assets/Images/clapper.png')}
          />
        ) : (
          <Image style={[styles.image, Helpers.fill]} source={{ uri: this.state.image }}/>
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
const mapStateToProps = (state) => ({
  token: state.auth.token,
})


export default connect(
  mapStateToProps,
  null,
)(Movie)
