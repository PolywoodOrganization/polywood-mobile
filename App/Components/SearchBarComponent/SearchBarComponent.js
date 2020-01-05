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
            this.props.setSearchValue(text)
          }}
        />
        <AppText>{this.props.result}</AppText>
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
  mapDispatchToProps,
)(SearchBar)
