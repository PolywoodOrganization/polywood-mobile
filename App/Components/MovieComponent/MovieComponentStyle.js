import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: '90%',
  },
  movieContainer: {
    backgroundColor: Colors.secondary,
    flexDirection: 'column',
    height: 250,
    width: 150,
  },
  titleText: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
})
