import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Helpers, Metrics } from 'App/Theme'

export default StyleSheet.create({

  smallTitle: {
    color: Colors.secondary,
    fontSize: 20,
  },
  title: {
    ...ApplicationStyles.title1,
    ...Helpers.textCenter,
  },
  edit: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infos: {
    ...Metrics.mediumVerticalMargin,
    flex: 0.9,
  }
})
