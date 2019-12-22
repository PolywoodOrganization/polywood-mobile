import { StyleSheet } from 'react-native'
import { Colors, Helpers } from 'App/Theme'

export default StyleSheet.create({
  searchInput: {
    ...Helpers.fullWidth,
    borderColor: Colors.secondary,
    backgroundColor: Colors.text,
    borderWidth: 2,
    color: Colors.primary,
  },
})
