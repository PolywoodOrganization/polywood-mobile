import React, { Component } from 'react'
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native'
import styles from './MovieComponentStyle'
import { Colors, Helpers, Metrics, Images } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import { MovieService } from '../../Services/MovieService'
import { connect } from 'react-redux'
import TagComponent from 'App/Components/TagComponent/TagComponent'
import MoviesActions from '../../Stores/Movies/Actions'
import SearchValueActions from '../../Stores/SearchValue/Actions'
import NavigationService from '../../Services/NavigationService'

class Movie extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: '',
      loading: false,
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    MovieService.getImage(this.props.token, this.props.movie.movieid).then((data) => {
        this.setState({ image: data, loading: false })
      },
    ).catch((error) => {
      console.log({ ...error })
    })
  }

  renderImage() {
    if (this.state.loading) {
      return (<ActivityIndicator size={'large'} color={Colors.primary}/>)

    } else if (this.state.image === '') {
      return (<Image
        style={[styles.image, Helpers.fill]}
        source={Images.clapper}
      />)
    } else {
      return (<Image
        style={[styles.image, Helpers.fill]}
        source={{ uri: this.state.image }}/>)
    }
  }

  onCategoryPress(genre) {
    this.props.getMovies(this.props.token, null, 'genre', genre)
    this.props.setGenreFilter(genre)
  }

  onDetails() {
    this.props.setCurrentMovie({...this.props.movie, image : this.state.image})
    NavigationService.navigate('MovieScreen')
  }

  renderGenre() {
    const genres = this.props.movie.genre.split('|')
    return (
      genres.map((genre) =>
        (
          <TouchableOpacity key={`genre-${genre}`} onPress={() => this.onCategoryPress(genre.trim())}>
            <TagComponent text={genre.trim()}/>
          </TouchableOpacity>
        ),
      ))
  }

  render() {
    return (
      <View style={[styles.movieContainer, Helpers.center, Metrics.smallHorizontalPadding]}>
        {this.renderImage()}
        <View style={Helpers.fillCol}>
          <AppText style={[styles.titleText, Helpers.textRight]}>{this.props.movie.title.toUpperCase()}</AppText>
          <AppText
            style={[styles.descText, styles.yearText, Helpers.textRight]}>{this.props.movie.releaseyear}</AppText>
          <View style={[Helpers.row, { flexWrap: 'wrap', justifyContent: 'flex-end' }]}>
            {this.renderGenre()}
          </View>
          <TouchableOpacity
            onPress={() => this.onDetails()}>
            <AppText style={[styles.crossText, Helpers.textRight]}>+</AppText>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (token, page, filterType, filter) => dispatch(MoviesActions.movies(token, page, filterType, filter)),
  setGenreFilter: (genre) => dispatch(SearchValueActions.setGenreFilter(genre)),
  setCurrentMovie: (movie) => dispatch(MoviesActions.setCurrentMovie(movie))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie)
