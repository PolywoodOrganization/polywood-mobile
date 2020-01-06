import React from 'react'
import { Text } from 'react-native'

const AppText = (props) =>
  (
    <Text {...props} style={[props.style, {fontFamily: 'OpenSans-Cond'}] }>{props.children}</Text>
  )


export default AppText