import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, StatusBar, Image, Pressable } from 'react-native';
import { nawals } from '../../utils/info';
import { getImage } from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PrimaryButton } from '../UI';
import { getGregorianDate, prettiDate, usableDate } from '../../utils/cholqij';

const Item = ({ title, index, selectedItemIndex }) => (
  <View style={[styles.item, index === selectedItemIndex && styles.selectedItem]}>
    <Text style={styles.title}>{title}</Text>
    <Image source={getImage(title)}  style={{ width: 200, height: 200, marginBottom:20 }} resizeMode="contain" />
  </View>
);

export const Carrousel = ({setEnergy, setNawal, setSelectedDate, setModalVisible }) => {

  const [energyCounter, setEnergyCounter] = useState(1);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleCalculate = () => {
    const selectedNawal = nawals[selectedItemIndex];
    setNawal(selectedNawal);
    setEnergy(energyCounter)

  
        const date = new Date(getGregorianDate(energyCounter, selectedNawal)) 
        setSelectedDate({ 
          usableDate: usableDate(date.getFullYear(), date.getMonth(), date.getDate()+1),
          prettiDate: prettiDate(date.getFullYear(), date.getMonth(), date.getDate()+1),
          year: date.getFullYear(), month: date.getMonth(), day: date.getDate() 
        })

        setModalVisible(false)
  };

  console.log(nawals[selectedItemIndex])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      ListFooterComponent={<View style={{ width:50 }} ></View>}
        horizontal={true}
        data={nawals}
        renderItem={({item, index}) => <Item title={item} index={index} selectedItemIndex={selectedItemIndex} />}
        keyExtractor={item => item}
        onScroll={(event) => {
          const { contentOffset, layoutMeasurement } = event.nativeEvent;
          const center = layoutMeasurement.width / 1;
          const index = Math.round(contentOffset.x / center);
          setSelectedItemIndex(index);
          setNawal(nawals[selectedItemIndex])
          
        }}
      />
      <View style={{ justifyContent: "center",
          alignItems: "center", flexDirection: "row", paddingBottom:100, marginTop:20 }}>
            <Pressable
            onPress={()=>{
                if(energyCounter-1 === 0)
                setEnergyCounter(13)
                else
                setEnergyCounter(energyCounter-1)
            
            }}
            >
                <Icon name="chevron-left" size={35} color="#444455" /> 
            </Pressable>
        
        <Text style={{ fontSize: 35, width: 100, textAlign: "center" }} >{energyCounter}</Text>

        <Pressable
            onPress={()=>{
                if(energyCounter+1 === 14)
                setEnergyCounter(1)
                else
                setEnergyCounter(energyCounter+1)
            
            }}
            >
                <Icon name="chevron-right" size={35} color="#444455" />
            </Pressable>
       
      </View>
      <View style={{ position: "absolute", bottom:0, width:"100%"}} >

        <PrimaryButton label={"Hacer el calculo"} onPress={()=>{
handleCalculate()


      }} />
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  selectedItem: {
    borderColor: 'green',
    borderWidth: 1,
  },
});
