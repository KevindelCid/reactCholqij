import React, { useState } from "react";
import { Card } from "./Card";
import { Image, Text, View, ScrollView } from "react-native";
import { ModalContainer } from "./ModalContainer";
import { infoNawals } from "../../utils";

export const NawalCard = ({ imageSource, day, nawalName, title, onPress }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const nawalInfo = infoNawals.find((item) => item.nawal === nawalName);

  return (
    <View>
      <ModalContainer
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        whitOutMeaning={ !nawalInfo?.meaning }
      >
        <ScrollView >
          <View style={{ justifyContent: "center", alignItems: "center",}}>
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 35,
                fontWeight: "800",
              }}
            >
              {nawalInfo?.nawal}
            </Text>
            
              <Image
                source={imageSource()}
                style={{ width: 200, height: 200, marginBottom:20 }}
                resizeMode="contain"
              />
            
            {nawalInfo?.meaning && (
              <>
                <Text style={{ textAlign: "justify" }}>
                  {nawalInfo?.meaning}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>
                  Positivo
                </Text>
                <Text>{nawalInfo?.positive.join(", ")}</Text>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>
                  Negativo
                </Text>
                <Text>{nawalInfo?.negative.join(", ")}</Text>
              </>
            )}
          </View>
        </ScrollView>
      </ModalContainer>
      <Card
        onPress={() => {
          setIsModalVisible(true);
        }}
        style={{ zIndex: 2, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          source={imageSource()}
          style={{ width: 50, height: 50 }}
          resizeMode="contain"
        />
        <Text>{`${day}, ${nawalName}`}</Text>
        <Text>{title}</Text>
      </Card>
    </View>
  );
};
