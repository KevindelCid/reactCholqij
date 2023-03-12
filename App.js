import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

import {
  Card,
  Container,
  ContentContainer,
  GridCholqij,
  Header,
  MyDateTimePicker,

} from "./src/components";
import { Switch, Text, View, Button } from "react-native";

import { getMayanDate } from "./src/utils/cholqij";
import { Lunations } from "./src/components/UI/Lunations";
import { NawalCard } from "./src/components/UI/NawalCard";
import { getImage } from "./src/utils";
import { PrimaryButton } from "./src/components/UI/PrimaryButton";
import { Footer } from "./src/components/Layout/Footer";

export default function App() {



  
  
  
  
  const [lunations, setLunations] = useState({});
  const [selectedDate, setSelectedDate] = useState({
    usableDate: "",
    prettiDate: "",
    day: 0,
    month: 0,
    year: 0,
  });



  useEffect(() => {
    setLunations(getMayanDate(selectedDate.usableDate));
  }, [selectedDate]);



  return (
    <Container>
      <Header />
      <ContentContainer>
       <View style={{ justifyContent:"center", alignItems:"center", paddingBottom: 20,}}>
       <Text style={{ fontSize:20, fontWeight:"bold" }}>{selectedDate.prettiDate}</Text>
       </View>
        <MyDateTimePicker setSelectedDate={setSelectedDate} />
        <PrimaryButton  />
      
        <Lunations lunations={lunations} />

      </ContentContainer>
      <Footer/>
    </Container>
    

  );
}
