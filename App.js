import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";
import {
  Card,
  Container,
  ContentContainer,
  GridCholqij,
  Header,
  MyDateTimePicker,
} from "./src/components";
import { Switch, Text, View, Button } from "react-native";

import {
  getGregorianDate,
  getMayanDate,
  prettiDate,
  usableDate,
} from "./src/utils/cholqij";
import { Lunations } from "./src/components/UI/Lunations";
import { NawalCard } from "./src/components/UI/NawalCard";
import { getImage } from "./src/utils";
import { PrimaryButton } from "./src/components/UI/PrimaryButton";
import { Footer } from "./src/components/Layout/Footer";
import { InverseMayanCalc } from "./src/components/UI";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  useEffect(() => {
    async function changeScreenOrientation() {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT
      );
    }
    changeScreenOrientation();
  }, []);

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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <Header />
      <ContentContainer>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {selectedDate.prettiDate}
          </Text>
        </View>
        <MyDateTimePicker
          label={"Calcular Nawales"}
          setSelectedDate={setSelectedDate}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "67%", marginRight: "3%" }}>
            <InverseMayanCalc
              label={"Calcular a la inversa"}
              setSelectedDate={setSelectedDate}
            />
          </View>
          <View style={{ width: "30%" }}>
            <PrimaryButton
              label={"Hoy"}
              color={"#444114"}
              onPress={() => {
                const now = new Date();
                const localYear = now.getFullYear();
                const localMonth = now.getMonth();
                const localDay = now.getDate();

                // Establece esta fecha sin afectar por la zona horaria
                const date = new Date(localYear, localMonth, localDay, 0, 0, 0);

                setSelectedDate({
                  usableDate: usableDate(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                  ),
                  prettiDate: prettiDate(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate()
                  ),
                  year: date.getFullYear(),
                  month: date.getMonth(),
                  day: date.getDate(),
                });
              }}
            />
          </View>
        </View>

        <Lunations lunations={lunations} />
      </ContentContainer>
      <Footer />
    </Container>
  );
}
