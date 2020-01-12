import React from 'react'
import { ActivityIndicator, Image, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Images } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './MovieScreenStyle'
import ActorsActions from 'App/Stores/Actors/Actions'
import MoviesActions from 'App/Stores/Movies/Actions'
import FavoritesActions from 'App/Stores/Favorites/Actions'
import NavigationService from 'App/Services/NavigationService'
import TagComponent from 'App/Components/TagComponent/TagComponent'

class MovieScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFavorite: this.props.favorites.some(({ idmovie, iduser }) => idmovie === this.props.movie.movieid && iduser === this.props.me.iduser),
    }
  }

  componentDidMount() {
    this.props.getCasting(this.props.token, this.props.movie.movieid)
    this.setState({
      isFavorite: this.props.favorites.some(({ idmovie, iduser }) => idmovie === this.props.movie.movieid && iduser === this.props.me.iduser),
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movie !== this.props.movie) {
      this.props.getCasting(this.props.token, this.props.movie.movieid)
    }
  }

  renderList(list) {
    const toRender = list.split('|')
    return (
      toRender.map((item) =>
        (
          <AppText key={item.trim()} style={styles.info}>• {item.trim().replace(/ *\([^)]*\) */g, '')}</AppText>
        ),
      ))
  }

  setCurrentActor(actor) {
    this.props.setCurrentActor(actor)
    NavigationService.navigate('ActorScreen')
  }

  renderActor() {
    if (this.props.castingLoading) {
      return (<ActivityIndicator size={'large'} color={Colors.text}/>)
    }
    if (this.props.casting.length === 0 && !this.props.castingLoading) {
      return (<AppText style={styles.info}>Non renseigné</AppText>)
    }
    return (
      this.props.casting.map((actor) =>
        (
          <TouchableOpacity key={actor.actorid} onPress={() => this.setCurrentActor(actor)}>
            <TagComponent text={actor.name} textColor='blue'
                          style={{ backgroundColor: Colors.text, borderColor: Colors.primary }}/>
          </TouchableOpacity>
        ),
      )
    )
  }

  renderFavorite() {
    this.props.getFavorites(this.props.token, this.props.me.iduser)
    if (this.state.isFavorite) {
      return (<TouchableOpacity
        onPress={() => this.removeFavorite()}>
        <Image style={styles.logo} source={Images.heart}/>
      </TouchableOpacity>)
    } else {
      return (<TouchableOpacity
        onPress={() => this.addFavorite()}>
        <Image style={styles.logo} source={Images.heartEmpty}/>
      </TouchableOpacity>)
    }
  }

  toggleIsFavorite() {
    this.setState({
      isFavorite: !this.state.isFavorite,
    })
  }

  addFavorite() {
    const favorite = {
      added: Date.now(),
      commentary: '',
      idmovie: this.props.movie.movieid,
      iduser: this.props.me.iduser,
    }
    this.props.addFavorite(this.props.token, favorite)
    this.toggleIsFavorite()
  }

  removeFavorite() {
    this.props.removeFavorite(this.props.token, this.props.movie.movieid)
    this.toggleIsFavorite()
  }

  render() {
    return (
      <ScrollView style={[Helpers.fill, Helpers.backgroundMain]}>
        <View>
          <StatusBar backgroundColor={Colors.primary} barStyle="light-content"/>
          <View style={styles.row}>
            <AppText
              style={styles.title}>{this.props.movie.title}</AppText>
            {this.renderFavorite()}
          </View>
          <View style={styles.row}>
            <View style={styles.posterContainer}>
              {
                this.props.movie.image ?
                  <Image source={{ uri: this.props.movie.image }} style={styles.poster}/> :
                  <Image source={Images.clapper} style={styles.poster}/>
              }
            </View>
            <View>
              <AppText style={styles.smallTitle}>Metteur en scène : </AppText>
              {this.renderList(this.props.movie.directors)}
              <AppText style={styles.smallTitle}>Date de sortie : </AppText>
              <AppText style={styles.info}>{this.props.movie.releasedate}</AppText>
              <AppText style={styles.smallTitle}>Genre :</AppText>
              {this.renderList(this.props.movie.genre)}
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <AppText style={styles.smallTitle}>Scénaristes :</AppText>
              {this.renderList(this.props.movie.writers)}
            </View>
            <View style={styles.logoContainer}>
              <Image source={Images.writer} style={styles.logo}/>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={Images.actor} style={styles.logo}/>
            </View>
            <View>
              <AppText style={styles.smallTitle}>Acteurs :</AppText>
              {this.renderActor()}
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.currentMovie,
  token: state.auth.token,
  castingLoading: state.movies.castingLoading,
  casting: state.movies.casting,
  favorites: state.favorites.favorites,
  me: state.auth.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentActor: (actor) => dispatch(ActorsActions.setCurrentActor(actor)),
  getCasting: (token, id) => dispatch(MoviesActions.getCasting(token, id)),
  addFavorite: (token, favorite) => dispatch(FavoritesActions.addFavorite(token, favorite)),
  removeFavorite: (token, id) => dispatch(FavoritesActions.removeFavorite(token, id)),
  getFavorites: (token, iduser) => dispatch(FavoritesActions.favorites(token, iduser)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieScreen)
