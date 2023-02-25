import React from 'react'
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export const Container = ({ children, style }) => {
  return (
    <SafeAreaProvider style={{ ...style }}>
    <SafeAreaView>
        <SafeAreaView>
         {children}
        </SafeAreaView>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}
