import { StyleSheet } from 'react-native'
import { Helpers, Metrics } from 'App/Theme'

export default StyleSheet.create({
  header: {
    height: 200,
  },
  image: {
    resizeMode: 'cover',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  logoContainer: {
    ...Helpers.row,
    ...Helpers.fullWidth,
    ...Helpers.mainSpaceBetween,
    ...Metrics.smallHorizontalPadding,
    position: 'absolute',
    bottom: 10,
  }
})
