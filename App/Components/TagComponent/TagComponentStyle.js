import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  tagContainer: {
    margin: 2,
    paddingVertical: 5,
    paddingHorizontal: 10  ,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    borderColor: Colors.secondary,
    borderWidth: 1,
  },
  pinkText: {
    color: Colors.secondary,
    fontSize: 10,
  },
  blueText : {
    color: Colors.primary,
    fontSize: 15,
  }
})
