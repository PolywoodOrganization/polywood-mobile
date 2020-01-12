import React from 'react'
import { View } from 'react-native'
import styles from './TagComponentStyle'
import AppText from 'App/Components/MyAppText/MyAppText'

const TagComponent = (props) => {
  let textStyle = props.textColor === 'blue' ? styles.blueText : styles.pinkText
  return (
  <View style={[styles.tagContainer, props.style]}>
    {props.cancelable ? <AppText style={styles.text}>{props.text} X</AppText> :
      <AppText style={textStyle}>{props.text}</AppText>}
  </View>
)}

export default TagComponent


