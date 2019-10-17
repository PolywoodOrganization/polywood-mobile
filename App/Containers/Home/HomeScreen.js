import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import Header from 'App/Components/HeaderComponent/HeaderComponent'
import SearchBar from '../../Components/SearchBarComponent/SearchBarComponent'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <Header />
        <SearchBar />
      </View>
    )
  }
}

HomeScreen.propTypes = {}

const mapStateToProps = (state) => ({
  searchValue: state.searchValue,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
