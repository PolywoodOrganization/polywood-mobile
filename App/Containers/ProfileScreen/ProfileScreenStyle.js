import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Helpers, Metrics } from 'App/Theme'

export default StyleSheet.create({

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
