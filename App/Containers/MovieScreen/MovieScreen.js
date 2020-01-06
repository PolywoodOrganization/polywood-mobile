import React from 'react'
import { Image, ScrollView, StatusBar, View } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Helpers, Images } from 'App/Theme'
import AppText from 'App/Components/MyAppText/MyAppText'
import styles from './MovieScreenStyle'

class MovieScreen extends React.Component {

  renderList(list) {
    const toRender = list.split('|')
    return (
      toRender.map((item) =>
        (
          <AppText style={styles.info}>• {item.trim()}</AppText>
        ),
      ))
  }


  render() {
    console.log(this.props.movie)
    return (
      <ScrollView style={[Helpers.fill, Helpers.backgroundMain]}>
        <View>
          <StatusBar backgroundColor={Colors.primary} barStyle="light-content"/>
          <AppText
            style={styles.title}>{this.props.movie.title}</AppText>
          <View style={styles.row}>
            <View style={styles.posterContainer}>
              {
                this.props.movie.image ?
                  <Image source={{ uri: this.props.movie.image }} style={styles.poster}/> :
                  <Image source={Images.clapper} style={styles.poster}/>
              }

            </View>
            <View>
              <AppText style={styles.smallTitle}>Metteur en scène : </AppText>
              <AppText style={styles.info}>{this.props.movie.directors}</AppText>
              <AppText style={styles.smallTitle}>Date de sortie : </AppText>
              <AppText style={styles.info}>{this.props.movie.releasedate}</AppText>
              <AppText style={styles.smallTitle}>Genre :</AppText>
              {this.renderList(this.props.movie.genre)}
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <AppText style={styles.smallTitle}>Scénaristes :</AppText>
              {this.renderList(this.props.movie.writers)}
            </View>
            <View style={styles.logoContainer}>
              <Image source={Images.writer} style={styles.logo}/>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.logoContainer}>
              <Image source={Images.actor} style={styles.logo}/>
            </View>
            <View>
              <AppText style={styles.smallTitle}>Acteurs :</AppText>
              {this.renderList(this.props.movie.actors)}
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.currentMovie,
})

export default connect(
  mapStateToProps,
  null,
)(MovieScreen)
