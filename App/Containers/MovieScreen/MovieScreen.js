import React from 'react'
import { Image, ScrollView, StatusBar, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Images } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './MovieScreenStyle'
import ActorsActions from 'App/Stores/Actors/Actions'
import { ActorService } from 'App/Services/ActorService'
import NavigationService from '../../Services/NavigationService'

class MovieScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actors: [],
      loading: false,
    }
  }

  componentDidMount() {
    this.fetchActors()
  }

  renderList(list) {
    const toRender = list.split('|')
    return (
      toRender.map((item) =>
        (
          <AppText key={item.trim()} style={styles.info}>• {item.trim()}</AppText>
        ),
      ))
  }

  fetchActors() {
    this.props.movie.castingsByMovieid.map((item) => {
      ActorService.getActorById(this.props.token, item.actorid).then((actor) => {
        this.setState({ actors: [...this.state.actors, actor] })
      }).catch((error) => {
        console.log({ ...error })
      })
    })
  }

  setCurrentActor(actor){
    this.setState({loading: true})
    this.props.setCurrentActor(actor)
    NavigationService.navigate('ActorScreen')
  }

  renderActor() {
    return (
      this.state.actors.map((actor) =>
        (
          <TouchableOpacity key={actor.actorid} onPress={() => this.setCurrentActor(actor)}>
          <AppText style={styles.actorInfo}>• {actor.name}</AppText>
          </TouchableOpacity>
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
            style={styles.title}>{this.props.movie.title}</AppText>
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
              <AppText style={styles.info}>{this.props.movie.directors}</AppText>
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
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentActor: (actor) => dispatch(ActorsActions.setCurrentActor(actor)),
  getActor: (token, id) => dispatch(ActorsActions.getActor(token, id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieScreen)
