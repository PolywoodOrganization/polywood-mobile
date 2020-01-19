import React from 'react'
import { Image, ScrollView, StatusBar, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Images, Metrics } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './ProfileScreenStyle'
import FavoritesActions from 'App/Stores/Favorites/Actions'
import AuthActions from 'App/Stores/Auth/Actions'
import FavoriteComponent from 'App/Components/FavoriteComponent/FavoriteComponent'
import InputComponent from 'App/Components/InputComponent/InputComponent'

class ProfileScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      firstname: this.props.me.firstname,
      lastname: this.props.me.lastname,
    }
  }

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

  handleChange(name, text) {
    return this.setState({
      [name]: text,
    })
  }

  updateUser() {
    this.setState({editMode: false,})
    let user = this.props.me
    user.firstname = this.state.firstname
    user.lastname = this.state.lastname
    this.props.update(this.props.token, user)
  }

  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content"/>
        <View style={styles.titleContainer}>
          {this.state.editMode ?
            <View style={[Helpers.row, Helpers.mainSpaceBetween]}>
              <InputComponent
                style={{ borderWidth: 1, width: '40%' }}
                placeholder='Prénom'
                onChangeText={(text) => this.handleChange('firstname', text)}
                value={this.state.firstname}
                returnKeyType={'done'}
                onSubmitEditing={() => this.updateUser()}
              />
              <InputComponent
                style={{ borderWidth: 1, width: '40%' }}
                placeholder='Nom'
                onChangeText={(text) => this.handleChange('lastname', text)}
                value={this.state.lastname}
                returnKeyType={'done'}
                onSubmitEditing={() => this.updateUser()}
              />
            </View> :
            <View style={styles.titleContainer}>
              <View style={styles.infos}>
                <AppText style={styles.title}>{this.props.me.firstname} {this.props.me.lastname}</AppText>
                <AppText style={[styles.smallTitle, Helpers.textCenter]}>{this.props.me.login}</AppText>
              </View>
              <TouchableOpacity
                style={Metrics.smallMargin}
                onPress={() => this.setState({editMode: true})}
              >
                <Image source={Images.editPink} style={styles.edit}/>
              </TouchableOpacity>
            </View>
          }
        </View>
        <ScrollView>
          {this.props.favorites.map((favorite) =>
            <FavoriteComponent key={`favorite-${favorite.idfavorite}`} favorite={favorite}
                               update={(favorite, comment) => this.updateFavorite(favorite, comment)}/>,
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
  update: (token, user) => dispatch(AuthActions.update(token, user))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen)
