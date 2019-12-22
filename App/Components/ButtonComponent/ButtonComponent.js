import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { ApplicationStyles, Colors } from 'App/Theme'
import styles from './ButtonComponentStyle'

const ButtonComponent = (props) => (
  <TouchableOpacity
    {...props}
    style={[styles.touchable, props.style]}
  >
    {
      props.isLoading ?
        (<ActivityIndicator color={Colors.primary}/>)
        :
        (<Text style={styles.touchableText}>
          {props.title}
        </Text>)
    }
  </TouchableOpacity>
)

export default ButtonComponent


