import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import Header from 'App/Components/HeaderComponent/HeaderComponent'
import SearchBar from 'App/Components/SearchBarComponent/SearchBarComponent'
import ResultList from 'App/Components/ResultListComponent/ResultListComponent'
import MoviesActions from 'App/Stores/Movies/Actions'
import TagComponent from 'App/Components/TagComponent/TagComponent'
import SearchValueActions from '../../Stores/SearchValue/Actions'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
    }
  }

  componentDidMount() {
    this.props.getMovies(this.props.token, this.state.page)
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

  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <Header/>
        <SearchBar/>
        <View style={Helpers.center}>
          {this.props.filterGenre !== '' &&
          <TouchableOpacity onPress={() => {
            this.getMoviesAndReset()
          }}>
            <TagComponent
              text={this.props.filterGenre}
              cancelable={true}
            />
          </TouchableOpacity>}
        </View>
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
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (token, page) => dispatch(MoviesActions.movies(token, page)),
  setGenreFilter: (genre) => dispatch(SearchValueActions.setGenreFilter(genre)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
