import React from 'react'
import { TouchableOpacity, View, ActivityIndicator, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Metrics } from 'App/Theme'
import Header from 'App/Components/HeaderComponent/HeaderComponent'
import SearchBar from 'App/Components/SearchBarComponent/SearchBarComponent'
import ResultList from 'App/Components/ResultListComponent/ResultListComponent'
import MoviesActions from 'App/Stores/Movies/Actions'
import AuthActions from 'App/Stores/Auth/Actions'
import FavoritesActions from 'App/Stores/Favorites/Actions'
import TagComponent from 'App/Components/TagComponent/TagComponent'
import SearchValueActions from 'App/Stores/SearchValue/Actions'
import NavigationService from '../../Services/NavigationService'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
    }
  }

  componentDidMount() {
    this.props.getMovies(this.props.token, this.state.page)
    this.props.getFavorites(this.props.token, this.props.me.iduser)
  }

  getMoviesAndReset() {
    this.setState({ page: 0 })
    this.props.getMovies(this.props.token, 0)
    this.props.setGenreFilter('')
  }

  getNextPage() {
    const nextPage = this.state.page + 1
    this.setState({ page: nextPage })
    this.props.getMovies(this.props.token, nextPage)
  }

  logoutAndRedirect() {
    this.props.logout()
    NavigationService.navigateAndReset('MainScreen')
  }

  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <StatusBar backgroundColor={Colors.orange} barStyle="light-content"/>
        <Header logout={() => this.logoutAndRedirect()}/>
        <SearchBar/>
        <View style={Helpers.center}>
          {this.props.filterGenre !== '' &&
          <TouchableOpacity onPress={() => {
            this.getMoviesAndReset()
          }}>
            <TagComponent
              style={Metrics.smallVerticalMargin}
              text={this.props.filterGenre}
              cancelable={true}
            />
          </TouchableOpacity>}
        </View>
        {this.props.moviesLoading && <ActivityIndicator  size='large' color={Colors.secondary}/>}
        <ResultList results={this.props.movies}
                    getNextPage={this.getNextPage.bind(this)}
                    refreshing={this.props.moviesLoading}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
  movies: state.movies.movies,
  token: state.auth.token,
  moviesLoading: state.movies.moviesLoading,
  filterGenre: state.searchValue.filterGenre,
  me: state.auth.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (token, page) => dispatch(MoviesActions.movies(token, page)),
  setGenreFilter: (genre) => dispatch(SearchValueActions.setGenreFilter(genre)),
  logout: () => dispatch(AuthActions.logout()),
  getFavorites: (token, iduser) => dispatch(FavoritesActions.favorites(token, iduser)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
