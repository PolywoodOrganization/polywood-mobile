import React, { Component } from 'react'
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native'
import AppText from 'App/Components/MyAppText/MyAppText'
import { Colors, Images } from 'App/Theme'
import { MovieService } from 'App/Services/MovieService'
import styles from './FavoriteComponentStyle'
import { connect } from 'react-redux'
import InputComponent from 'App/Components/InputComponent/InputComponent'
import FavoritesActions from '../../Stores/Favorites/Actions'

class FavoriteComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      loading: false,
      width: 0,
      editMode: false,
      comment: props.favorite.commentary,
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    MovieService.getMovieById(this.props.token, this.props.favorite.idmovie).then((movie) => {
      this.setState({ title: movie.title, loading: false })
    }).catch((error) => {
      console.log({ ...error })
    })
  }

  renderClapper() {
    return (Array(Math.trunc(this.state.width / 50)).fill().map((value, index) =>
      (
        <View key={`hole-${index}`} style={styles.hole}/>
      ),
    ))
  }

  handleChange(text) {
    return this.setState({
      comment: text,
    })
  }

  updateComment(favorite, comment) {
    this.props.update(favorite, comment)
    this.setState({ editMode: false })
  }

  removeFavorite() {
    this.props.removeFavorite(this.props.token, this.props.favorite.idmovie)
  }

  render() {
    return (
      <View style={styles.clapperContainer} onLayout={(event) => {
        this.setState({ width: event.nativeEvent.layout.width })
      }}>
        <View style={styles.clapper}>
          {this.renderClapper()}
        </View>
        <View style={styles.clapperContent}>
          {this.state.loading && <ActivityIndicator size={'large'} color={Colors.primary}/>}
          <AppText style={styles.title}>{this.state.title.toUpperCase()}</AppText>

          <View style={styles.body}>
            <View style={styles.commentContainer}>
              {this.state.editMode ?
                <InputComponent
                  style={{ borderWidth: 0 }}
                  placeholder='Ajouter un commentaire'
                  onChangeText={(text) => this.handleChange(text)}
                  value={this.state.comment}
                  returnKeyType={'done'}
                  onSubmitEditing={() => this.updateComment(this.props.favorite, this.state.comment)}
                /> :
                this.props.favorite.commentary === '' ?
                  <AppText style={styles.commentText}>Ajouter un commentaire</AppText>
                  : <AppText style={styles.commentText}>{this.props.favorite.commentary}</AppText>
              }
              {!this.state.editMode && <TouchableOpacity onPress={() => this.setState({ editMode: true })}>
                <Image source={Images.edit} style={styles.edit}/>
              </TouchableOpacity>}
            </View>
            <TouchableOpacity style={styles.heartContainer} onPress={() => this.removeFavorite()}>
              <Image source={Images.heart} style={styles.heart}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.clapper}>
          {this.renderClapper()}
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
  me: state.auth.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  removeFavorite: (token, id) => dispatch(FavoritesActions.removeFavorite(token, id)),
  getFavorites: (token, iduser) => dispatch(FavoritesActions.favorites(token, iduser)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavoriteComponent)
