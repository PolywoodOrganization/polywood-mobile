import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './SearchBarComponentStyle'
import { Helpers } from 'App/Theme'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import SearchValueActions from 'App/Stores/SearchValue/Actions'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  render() {
    return (
      <View style={[Helpers.center, Helpers.fullWidth]}>
        <TextInput
          style={[styles.searchInput, Helpers.fullWidth]}
          placeholder="Rechercher..."
          value={this.state.value}
          onChangeText={(text) => {
            this.setState({ value: text })
            this.props.setSearchValue(this.state.value)
          }}
        />
        <Text>{this.props.result}</Text>
      </View>
    )
  }
}

SearchBar.propTypes = {
  setSearchValue: PropTypes.func,
  result: PropTypes.string,
}

const mapStateToProps = (state) => ({
  result: state.searchValue.searchValue,
})

const mapDispatchToProps = (dispatch) => ({
  setSearchValue: (searchText) => dispatch(SearchValueActions.setSearchValue(searchText)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
