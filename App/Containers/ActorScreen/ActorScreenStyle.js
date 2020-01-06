import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Helpers, Metrics } from 'App/Theme'

export default StyleSheet.create({
  posterContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 500,
    width: 160,
    height: 160,
    ...Helpers.center,
  },
  poster: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
    borderRadius: 500,
  },
  logoContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 200,
    width: 100,
    height: 100,
    ...Helpers.center,
  },
  logo: {
    resizeMode: 'cover',
    width: 60,
    height: 60,
  },
  smallTitle: {
    color: Colors.secondary,
    fontSize: 20,
  },
  info: {
    color: Colors.text,
    fontSize: 18,
  },
  movieInfo: {
    color: Colors.text,
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  title: {
    ...ApplicationStyles.title1,
    ...Helpers.textCenter,
    ...Metrics.mediumVerticalMargin,
  },
  row: {
    ...Helpers.rowCross,
    ...Helpers.scrollSpaceAround,
    ...Metrics.mediumVerticalMargin,
  },
})
