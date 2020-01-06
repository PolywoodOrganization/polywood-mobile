import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Helpers, Images } from 'App/Theme'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SearchValueActions from 'App/Stores/SearchValue/Actions'
import InputComponent from '../InputComponent/InputComponent'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './SearchBarComponentStyle'
import MoviesActions from '../../Stores/Movies/Actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  onSearchPress(title) {
    if(title === '') {
      this.props.getMovies(this.props.token, 0)
    } else {
      this.props.getMovies(this.props.token, null, 'title', title)
    }
  }

  render() {
    return (
      <View style={[Helpers.center, Helpers.fullWidth]}>
        <InputComponent
          placeholder="Rechercher par titre..."
          value={this.state.value}
          onChangeText={(text) => {
            this.setState({ value: text })
            this.props.setTitleFilter(text)
          }}
          onSubmitEditing={() => this.onSearchPress(this.state.value)}
        />
        <View style={[Helpers.fullWidth]}>
        <TouchableOpacity
          style={styles.searchTouchable}
          onPress={() => this.onSearchPress(this.state.value)}
        >
          <Image
            style={[styles.image]}
            source={Images.search}
          />
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

SearchBar.propTypes = {
  setTitleFilter: PropTypes.func,
  result: PropTypes.string,
}

const mapStateToProps = (state) => ({
  result: state.searchValue.filterTitle,
  token: state.auth.token,
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (token, page, filterType, filter) => dispatch(MoviesActions.movies(token, page, filterType, filter)),
  setTitleFilter: (searchText) => dispatch(SearchValueActions.setTitleFilter(searchText)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar)
