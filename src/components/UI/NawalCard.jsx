import React from 'react'
import { Card } from './Card'
import { Image, Text } from 'react-native'

export const NawalCard = ({imageSource, day, nawalName, title }) => {
  return (
    <Card
        style={{  justifyContent: "center",
        alignItems:"center" }}>

        <Image source={imageSource()}
      style={{ width: 50, height: 50 }} 
      resizeMode="contain" />
      <Text>{ `${day}, ${nawalName}` }</Text>
      <Text>{title}</Text>


    </Card>
  )
}
