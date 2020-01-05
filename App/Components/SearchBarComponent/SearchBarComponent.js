import React, { Component } from 'react'
import { View } from 'react-native'
import { Helpers } from 'App/Theme'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SearchValueActions from 'App/Stores/SearchValue/Actions'
import InputComponent from '../InputComponent/InputComponent'
import AppText from 'App/Components/MyAppText/MyAppText'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  render() {
    return (
      <View style={[Helpers.center, Helpers.fullWidth]}>
        <InputComponent
          placeholder="Rechercher..."
          value={this.state.value}
          onChangeText={(text) => {
            this.setState({ value: text })
            this.props.setTitleFilter(text)
          }}
        />
        <AppText>{this.props.result}</AppText>
        <AppText>{this.props.filterGenre}</AppText>
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
  filterGenre: state.searchValue.filterGenre
})

const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (searchText) => dispatch(SearchValueActions.setTitleFilter(searchText)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar)
