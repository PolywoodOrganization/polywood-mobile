import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Helpers } from 'App/Theme'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center'
  },

  logoContainer: {
    ...Helpers.fullWidth,
    height: 200,
    marginBottom: 25,
  }
})
