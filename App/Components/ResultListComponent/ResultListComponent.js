import React, { Component } from 'react'
import { View, ScrollView, FlatList } from 'react-native'
import styles from './ResultListComponentStyle'
import { Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'
import Movie from 'App/Components/MovieComponent/MovieComponent'

class ResultList extends Component {
  render() {
    return (
      <ScrollView
        style={Helpers.fill}
        contentContainerStyle={[styles.listContainer, Helpers.fullWidth, Helpers.center]}
      >
        <FlatList
          keyExtractor={(i) => i.id}
          data={this.props.results}
          renderItem={(i) => (
            <View style={Helpers.center}>
              <Movie titre={i.title} image={i.image} />
            </View>
          )}
        />
      </ScrollView>
    )
  }
}

ResultList.defaultProps = {
  results: [
    { id: 1, title: 'Titre du film 1', image: '' },
    { id: 2, title: 'Titre du film 2', image: '' },
    { id: 3, title: 'Titre du film 3', image: '' },
    { id: 4, title: 'Titre du film 4', image: '' },
  ],
}

ResultList.propTypes = {
  results: PropTypes.array,
}

export default ResultList
