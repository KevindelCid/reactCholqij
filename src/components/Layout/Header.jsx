import React from 'react'
import { Text, View } from 'react-native'

export const Header = () => {
  return (
    <View style={{ backgroundColor:'black',  height:80, width:'100%', justifyContent: 'center', alignItems: 'center', marginBottom:15}}>
        <Text style={{ color: 'white', fontWeight:'bold', fontSize:20, }}>LUZMAYAPP</Text>
    </View>
  )
}
