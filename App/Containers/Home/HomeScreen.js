import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Helpers } from 'App/Theme'
import Header from 'App/Components/HeaderComponent/HeaderComponent'
import SearchBar from 'App/Components/SearchBarComponent/SearchBarComponent'
import ResultList from 'App/Components/ResultListComponent/ResultListComponent'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fill, Helpers.backgroundMain]}>
        <Header />
        <SearchBar />
        <ResultList />
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
