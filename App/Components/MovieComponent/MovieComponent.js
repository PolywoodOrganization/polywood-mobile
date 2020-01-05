import React, { Component } from 'react'
import { ActivityIndicator, Image, View } from 'react-native'
import styles from './MovieComponentStyle'
import { Colors, Helpers, Metrics } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import { MovieService } from '../../Services/MovieService'
import { connect } from 'react-redux'

class Movie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: '',
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    MovieService.getImage(this.props.token, this.props.movie.movieid).then((data) => {
        this.setState({ image: data, loading: false })
      },
    ).catch((error) => {
      console.log({ ...error })
    })
  }

  renderImage() {
    if (this.state.loading) {
      return (<ActivityIndicator size={'large'} color={Colors.primary}/>)

    } else if (this.state.image === '') {
      return (<Image
        style={[styles.image, Helpers.fill]}
        source={require('App/Assets/Images/clapper.png')}
      />)
    } else {
      return (<Image
        style={[styles.image, Helpers.fill]}
        source={{ uri: this.state.image }}/>)
    }
  }

  render() {
    return (
      <View style={[styles.movieContainer, Helpers.center, Metrics.smallHorizontalPadding ]}>
        {this.renderImage()}
        <View style={Helpers.fillCol}>
          <AppText style={[styles.titleText, Helpers.textRight]}>{this.props.movie.title.toUpperCase()}</AppText>
          <AppText style={[styles.descText, styles.yearText, Helpers.textRight]}>{this.props.movie.releaseyear}</AppText>
          <AppText style={[styles.descText, Helpers.textRight]}>{this.props.movie.genre}</AppText>
          <AppText style={[styles.crossText, Helpers.textRight]}
          onPress={() => console.log('coucou')}>+</AppText>
        </View>
      </View>
    )
  }
}

Movie.defaultProps = {
  title: '',
  image: '',
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})


export default connect(
  mapStateToProps,
  null,
)(Movie)
