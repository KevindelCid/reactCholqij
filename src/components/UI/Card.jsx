import React from "react";
import { Pressable, Text, View } from "react-native";

export const Card = ({ onPress, children, style }) => {
  return (
    <Pressable onPress={onPress}  style={{
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 12,
        width: 100,
        height: 100,
        backgroundColor: 'white', // Agregar un color de fondo
        ...style,
       
        
      }}>
     
        {children}
      
    </Pressable>
  );
};
