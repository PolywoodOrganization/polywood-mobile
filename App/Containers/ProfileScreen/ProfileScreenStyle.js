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
})
