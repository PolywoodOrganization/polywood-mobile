import React, { Component } from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import styles from './ResultListComponentStyle'
import { Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'
import Movie from 'App/Components/MovieComponent/MovieComponent'

class ResultList extends Component {

  render() {
    return (
      <View
        style={Helpers.fill}
        contentContainerStyle={[styles.listContainer, Helpers.fullWidth, Helpers.center]}
      >
        <FlatList
          keyExtractor={(i) => `${i.movieid}`}
          data={this.props.results}
          renderItem={(i) => {
            return (
              <View style={Helpers.center}>
                <Movie title={i.item.title}/>
              </View>
            )
          }}
          onEndReached={() => this.props.getNextPage()}
          onEndReachedThreshold={0}
          refreshing={this.props.refreshing}
        />
      </View>
    )
  }
}

ResultList.defaultProps = {
  results: [],
}


export default ResultList
