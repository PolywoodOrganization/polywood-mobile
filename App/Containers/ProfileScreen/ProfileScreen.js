import React from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Metrics } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './ProfileScreenStyle'
import FavoritesActions from 'App/Stores/Favorites/Actions'
import FavoriteComponent from 'App/Components/FavoriteComponent/FavoriteComponent'

class ProfileScreen extends React.Component {

  componentDidMount() {
    this.props.getFavorites(this.props.token, this.props.me.iduser)
  }

  updateFavorite(favorite, comment) {
    const newFavorite = {
      ...favorite,
      commentary: comment,
    }
    this.props.updateFavorite(this.props.token, newFavorite)
  }

  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content"/>
        <View style={Metrics.mediumVerticalMargin}>
          <AppText style={styles.title}>{this.props.me.firstname} {this.props.me.lastname}</AppText>
          <AppText style={[styles.smallTitle, Helpers.textCenter]}>{this.props.me.login}</AppText>
        </View>

        <ScrollView>
          {this.props.favorites.map((favorite) =>
            <FavoriteComponent key={`favorite-${favorite.idfavorite}`} favorite={favorite} update={(favorite, comment)=> this.updateFavorite(favorite, comment)}/>,
          )}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  me: state.auth.currentUser,
  token: state.auth.token,
  favorites: state.favorites.favorites,
})

const mapDispatchToProps = (dispatch) => ({
  updateFavorite: (token, favorite) => dispatch(FavoritesActions.updateFavorite(token, favorite)),
  getFavorites: (token, iduser) => dispatch(FavoritesActions.favorites(token, iduser)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen)
