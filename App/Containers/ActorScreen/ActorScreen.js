import React from 'react'
import { Image, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Images, Metrics } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './ActorScreenStyle'
import { ActorService } from 'App/Services/ActorService'
import { MovieService } from 'App/Services/MovieService'
import MoviesActions from 'App/Stores/Movies/Actions'
import NavigationService from 'App/Services/NavigationService'

class ActorScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  setCurrentMovie(movie) {
    MovieService.getImage(this.props.token, movie.movieid).then(
      (image) => {
        this.props.setCurrentMovie({ ...movie, image })
        NavigationService.navigate('MovieScreen')
      },
    ).catch((error) => {
      console.log({ ...error })
    })
  }

  fetchMovies() {
    ActorService.getFilmoById(this.props.token, this.props.actor.actorid).then((movies) => {
      this.setState({ movies: movies })
    }).catch((error) => {
      console.log({ ...error })
    })
  }

  renderMovies() {
    return (
      this.state.movies.map((movie) => (
        <TouchableOpacity style={Helpers.textRight} key={`movie-${movie.movieid}`}
                          onPress={() => this.setCurrentMovie(movie)}>
          <AppText style={[styles.movieInfo, Helpers.textRight]}>{movie.title}</AppText>
        </TouchableOpacity>

      ))
    )
  }

  renderStars() {
    return (
      Array(this.props.actor.normalizedrating).fill().map((value, index) =>
        (
          <Image key={`star-${index}`} source={Images.star} style={{ width: 30, height: 30 }}/>
        ),
      )
    )
  }

  renderEmptyStars() {
    return (
      Array(5 - this.props.actor.normalizedrating).fill().map((value, index) =>
        (
          <Image key={`star-${index}`} source={Images.starEmpty} style={{ width: 30, height: 30 }}/>
        ),
      )
    )
  }


  render() {
    return (
      <ScrollView style={[Helpers.fill, Helpers.backgroundMain]}>
        <View>
          <StatusBar backgroundColor={Colors.primary} barStyle="light-content"/>
          <AppText
            style={styles.title}>{this.props.actor.name}</AppText>
          <View style={styles.row}>
            {this.renderStars()}
            {this.renderEmptyStars()}
          </View>
          <View style={Metrics.mediumHorizontalPadding}>
            <View style={[Helpers.row, {alignItems:'center'}]}>
              <AppText style={[styles.info, {fontSize: 50}]}>{this.props.actor.googlehits} </AppText>
              <AppText style={styles.smallTitle}>recherches google</AppText>
            </View>
            <View style={[Helpers.row, {justifyContent:'flex-end', alignItems:'center'}]}>
              <AppText style={styles.smallTitle}>Note globale de </AppText>
              <AppText style={[styles.info, {fontSize: 50}]}>{this.props.actor.ratingsum}</AppText>
            </View>
            <View style={[Helpers.row, {alignItems:'center'}]}>
              <AppText style={[styles.info, {fontSize: 50}]}>{this.props.actor.moviecount} </AppText>
              <AppText style={styles.smallTitle}>films tournés</AppText>
            </View>
            <AppText style={[styles.smallTitle, Helpers.textRight]}>Filmographie :</AppText>
            {this.renderMovies()}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  actor: state.actors.currentActor,
  token: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentMovie: (movie) => dispatch(MoviesActions.setCurrentMovie(movie)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActorScreen)
