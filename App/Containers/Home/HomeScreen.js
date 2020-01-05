import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import Header from 'App/Components/HeaderComponent/HeaderComponent'
import SearchBar from 'App/Components/SearchBarComponent/SearchBarComponent'
import ResultList from 'App/Components/ResultListComponent/ResultListComponent'
import MoviesActions from 'App/Stores/Movies/Actions'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
    }
  }

  componentDidMount() {
    this.props.getMovies(this.props.token, this.state.page)
  }

  getNextPage() {
    const nextPage = this.state.page +1
    this.setState({ page: nextPage })
    this.props.getMovies(this.props.token, nextPage)
  }

  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <Header/>
        <SearchBar/>
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
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (token, page) => dispatch(MoviesActions.movies(token, page)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
