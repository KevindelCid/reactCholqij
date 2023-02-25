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
import { Switch, Text } from "react-native";
import { sayHello } from "./src/utils";
import { NawalCard } from "./src/components/UI";
import batzImage from "./src/assets/nawales/batz.png";
import eImage from "./src/assets/nawales/e.png";
import ajImage from "./src/assets/nawales/aj.png";
import ixImage from "./src/assets/nawales/ix.png";
import tzikinImage from "./src/assets/nawales/tzikin.png";
import ajmaqImage from "./src/assets/nawales/ajmaq.png";
import nojImage from "./src/assets/nawales/noj.png";
import tijaxImage from "./src/assets/nawales/tijax.png";
import kawoqImage from "./src/assets/nawales/kawoq.png";
import ajpuImage from "./src/assets/nawales/ajpu.png";
import imoxImage from "./src/assets/nawales/imox.png";
import iqImage from "./src/assets/nawales/iq.png";
import aqabalImage from "./src/assets/nawales/aqabal.png";
import katImage from "./src/assets/nawales/kat.png";
import kanImage from "./src/assets/nawales/kan.png";
import kemeImage from "./src/assets/nawales/keme.png";
import keejImage from "./src/assets/nawales/keej.png";
import qanilImage from "./src/assets/nawales/qanil.png";
import tojImage from "./src/assets/nawales/toj.png";
import tziImage from "./src/assets/nawales/tzi.png";

import { getMayanDate } from "./src/utils/cholqij";

export default function App() {


  // getMayanDate(selectedDate.usableDate) aqui tengo las 9 lunaciones solo falta poder colocarlas


  // Cantidad de elementos que queremos mostrar por fila
 
  const [selectedDate, setSelectedDate] = useState({
    usableDate: "",
    day: 0,
    month: 0,
    year: 0,
  });

  const [ lunations, setLunations ] = useState({})

  useEffect(() => {
   setLunations(getMayanDate(selectedDate.usableDate))
  }, [selectedDate])
  
const getImage = (nawal) => {
  switch (nawal) {
    case "B'atz":
      return batzImage;
    case "E":
      return eImage;
    case "Aj":
      return ajImage;
    case "I'x":
      return ixImage;
    case "Tz'ikin":
      return tzikinImage;
    case "Ajmaq":
      return ajmaqImage;
    case "No'j":
      return nojImage;
    case "Tijax":
      return tijaxImage;
    case "Kawoq":
      return kawoqImage;
    case "Ajpú":
      return ajpuImage;
    case "Imox":
      return imoxImage;
    case "Iq'":
      return iqImage;
    case "Aq'ab'al":
      return aqabalImage;
    case "K'at":
      return katImage;
    case "Kan":
      return kanImage;
    case "Keme":
      return kemeImage;
    case "Keej":
      return keejImage;
    case "Q'anil":
      return qanilImage;
    case "Toj":
      return tojImage;
    case "Tz'i'":
      return tziImage;
    default:
      return eImage;
  }
};


  return (
    <Container>
      <Header />
      <ContentContainer>
        <Text>{selectedDate.prettiDate}</Text>
        <MyDateTimePicker setSelectedDate={setSelectedDate} />
        {
              Object.keys(lunations).length ? <>
          <GridCholqij >
          
              <NawalCard
                imageSource={()=> getImage(lunations.engendramientoAuxIzq.nawal)}
                nawalName={lunations.engendramientoAuxIzq.nawal}
                title={`aux engend. izq`}
                day={lunations.engendramientoAuxIzq.energy}
              />
                <NawalCard
                imageSource={()=> getImage(lunations.engendramiento.nawal)}
                nawalName={lunations.engendramiento.nawal}
                title={`Engendramiento`}
                day={lunations.engendramiento.energy}
              />
            <NawalCard
                imageSource={()=> getImage(lunations.engendramientoAuxDer.nawal)}
                nawalName={lunations.engendramientoAuxDer.nawal}
                title={`aux engend. der`}
                day={lunations.engendramientoAuxDer.energy}
              />
          </GridCholqij>
          {/* middle row */}
          <GridCholqij >
          
          <NawalCard
            imageSource={()=> getImage(lunations.auxIz.nawal)}
            nawalName={lunations.auxIz.nawal}
            title={`aux izq`}
            day={lunations.auxIz.energy}
          />
            <NawalCard
            imageSource={()=> getImage(lunations.nawal.nawal)}
            nawalName={lunations.nawal.nawal}
            title={`Nawal fecha`}
            day={lunations.nawal.energy}
          />
        <NawalCard
            imageSource={()=> getImage(lunations.auxDer.nawal)}
            nawalName={lunations.auxDer.nawal}
            title={`aux der`}
            day={lunations.auxDer.energy}
          />
      </GridCholqij>
       {/* destiny row */}
       <GridCholqij >
          
          <NawalCard
            imageSource={()=> getImage(lunations.destinoAuxIzq.nawal)}
            nawalName={lunations.destinoAuxIzq.nawal}
            title={`aux dest. izq`}
            day={lunations.destinoAuxIzq.energy}
          />
            <NawalCard
            imageSource={()=> getImage(lunations.destino.nawal)}
            nawalName={lunations.destino.nawal}
            title={`destino`}
            day={lunations.destino.energy}
          />
        <NawalCard
            imageSource={()=> getImage(lunations.destinoAuxDer.nawal)}
            nawalName={lunations.destinoAuxDer.nawal}
            title={`aux dest. der`}
            day={lunations.destinoAuxDer.energy}
          />
      </GridCholqij>
      </>
  : <></>
              }
      </ContentContainer>
    </Container>
  );
}
