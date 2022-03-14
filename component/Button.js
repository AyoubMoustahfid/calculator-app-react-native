import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Button = ({title, onPress, style, text_style}) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={style}
    >
      <Text
        style={text_style}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})