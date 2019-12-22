import React from 'react'
import { TextInput } from 'react-native'
import { Helpers, Metrics } from 'App/Theme'
import styles from'./InputComponentStyle'

const InputComponent = (props) => (
  <TextInput
    {...props}
    style={[styles.searchInput, props.style]}
    ref={(input) => (props.reference && props.reference(input))}
  />
)


export default InputComponent
