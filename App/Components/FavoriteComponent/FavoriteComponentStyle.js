import { StyleSheet } from 'react-native'
import { Colors } from 'App/Theme'

export default StyleSheet.create({
  clapperContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    margin: 15,
    padding: 15,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: 'bold',
  },
  commentContainer: {
    backgroundColor: Colors.text,
    borderRadius: 30,
    margin: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.9,
  },
  commentText: {
    fontSize: 15,
    color: Colors.primary,
    paddingRight: 30,
  },
  hole: {
    backgroundColor: Colors.primary,
    width: 30,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 20,
  },
  clapper: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  clapperContent: {
    marginVertical: 10,
  },
  edit: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
  heart: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heartContainer: {
    justifyContent: 'center',
  }
})
