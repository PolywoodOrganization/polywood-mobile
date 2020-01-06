import React from 'react'
import { View } from 'react-native'
import styles from './TagComponentStyle'
import AppText from 'App/Components/MyAppText/MyAppText'

const TagComponent = (props) => (
  <View style={[styles.tagContainer]}>
    {props.cancelable ? <AppText style={styles.text}>{props.text} X</AppText> :
      <AppText style={styles.text}>{props.text}</AppText>}
  </View>
)

export default TagComponent


