import React from 'react'
import { Text, View, Image, StatusBar } from 'react-native'
import { getImage } from '../../utils/images'

export const Footer = () => {
  return (<>
    
    <View style={{ backgroundColor:'#444455',  height:80, width:'100%', justifyContent: 'center', alignItems: 'center', }}>
        <Text style={{ color:"white" }} >Pixab</Text>
    </View>
    </>
  )
}
