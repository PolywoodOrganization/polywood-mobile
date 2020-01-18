import React from 'react'
import { ActivityIndicator, Image, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Images, Metrics } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './ActorScreenStyle'
import { MovieService } from 'App/Services/MovieService'
import MoviesActions from 'App/Stores/Movies/Actions'
import ActorsActions from 'App/Stores/Actors/Actions'
import NavigationService from 'App/Services/NavigationService'
import TagComponent from 'App/Components/TagComponent/TagComponent'

class ActorScreen extends React.Component {

  componentDidMount() {
    this.props.getFilmo(this.props.token, this.props.actor.actorid)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.actor.actorid !== this.props.actor.actorid) {
      this.props.getFilmo(this.props.token, this.props.actor.actorid)
    }
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

  renderMovies() {
    if (this.props.filmoLoading) {
      return (<ActivityIndicator size={'large'} color={Colors.text}/>)
    }
    if(this.props.filmo.length === 0 && !this.props.filmoLoading) {
      return (<AppText style={styles.info}>Non renseigné</AppText>)
    }
    return (
      this.props.filmo.map((movie) => (
        <TouchableOpacity key={`movie-${movie.movieid}`}
                          onPress={() => this.setCurrentMovie(movie)}>
          <TagComponent text={movie.title} textColor='blue'
                        style={{ backgroundColor: Colors.text, borderColor: Colors.primary }}/>
        </TouchableOpacity>

      ))
    )
  }

  renderStars() {
    return (
      Array(Math.trunc(this.props.actor.normalizedrating/2)).fill().map((value, index) =>
        (
          <Image key={`star-${index}`} source={Images.star} style={{ width: 30, height: 30 }}/>
        ),
      )
    )
  }

  renderEmptyStars() {
    return (
      Array(5 - Math.trunc(this.props.actor.normalizedrating/2)).fill().map((value, index) =>
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
            <View style={[Helpers.row, { alignItems: 'center' }]}>
              <AppText style={[styles.info, { fontSize: 50 }]}>{this.props.actor.googlehits} </AppText>
              <AppText style={styles.smallTitle}>recherches google</AppText>
            </View>
            <View style={[Helpers.row, { justifyContent: 'flex-end', alignItems: 'center' }]}>
              <AppText style={styles.smallTitle}>Note globale de </AppText>
              <AppText style={[styles.info, { fontSize: 50 }]}>{this.props.actor.ratingsum}</AppText>
            </View>
            <View style={[Helpers.row, { alignItems: 'center' }]}>
              <AppText style={[styles.info, { fontSize: 50 }]}>{this.props.actor.moviecount} </AppText>
              <AppText style={styles.smallTitle}>films tournés</AppText>
            </View>
            <AppText style={[styles.smallTitle, Helpers.textRight]}>Filmographie :</AppText>
            <View style={[Helpers.row, { flexWrap: 'wrap' }, Helpers.mainEnd]}>
              {this.renderMovies()}
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  actor: state.actors.currentActor,
  token: state.auth.token,
  filmoLoading: state.actors.filmoLoading,
  filmo: state.actors.filmo,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentMovie: (movie) => dispatch(MoviesActions.setCurrentMovie(movie)),
  getFilmo: (token, id) => dispatch(ActorsActions.getFilmo(token, id)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActorScreen)
