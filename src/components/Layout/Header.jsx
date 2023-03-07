import React from 'react'
import { Text, View, Image } from 'react-native'
import { getImage } from '../../utils/images'

export const Header = () => {
  return (
    <View style={{ backgroundColor:'black',  height:80, width:'100%', justifyContent: 'center', alignItems: 'center', marginBottom:15}}>
        <Image source={getImage("luzmaya")} style={{   height:150, width:150, }}  resizeMode="contain" />
    </View>
  )
}
