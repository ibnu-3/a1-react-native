import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Calculator() {
  return (
    <View style={styles.container}>
      <View style={styles.calculator}>Calculator</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"gray",
        alignItems:'center'
    },
    calculator:{
        width: 330,
        height:600,
        backgroundColor:'white',
        borderRadius: 16,
        padding:36
    }
})