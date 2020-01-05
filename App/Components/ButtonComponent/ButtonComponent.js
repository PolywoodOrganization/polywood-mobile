import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { ApplicationStyles, Colors } from 'App/Theme'
import styles from './ButtonComponentStyle'
import AppText from 'App/Components/MyAppText/MyAppText'

const ButtonComponent = (props) => (
  <TouchableOpacity
    {...props}
    style={[styles.touchable, props.style]}
  >
    {
      props.isLoading ?
        (<ActivityIndicator color={Colors.primary}/>)
        :
        (<AppText style={styles.touchableText}>
          {props.title}
        </AppText>)
    }
  </TouchableOpacity>
)

export default ButtonComponent


