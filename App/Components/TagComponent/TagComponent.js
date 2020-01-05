import React from 'react'
import { View} from 'react-native'
import styles from './TagComponentStyle'
import AppText from 'App/Components/MyAppText/MyAppText'

const TagComponent = (props) => (
 <View style={[styles.tagContainer]}>
   <AppText style={styles.text}>{props.text}</AppText>
 </View>
)

export default TagComponent


