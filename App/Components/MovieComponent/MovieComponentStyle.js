import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: '90%',
    height: '90%'
  },
  movieContainer: {
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    height: 250,
    marginHorizontal: 10,
    marginVertical: 10,
    width: '80%',
  },
  titleText: {
    color: Colors.text,
    fontSize: 25,
  },
  descText: {
    color: Colors.primary,
    fontSize: 15,
  },
  yearText: {
    fontSize: 20
  },
  crossText: {
    color: Colors.text,
    fontSize: 40,
  }
})
