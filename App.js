import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from 'expo-font';
import { Text, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from 'expo-asset';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

export default function App() {
  //앱로딩에서 preload만 하는것이라면 hook을 사용하면 3줄이면끝남
  //but, 로딩중에 db, api 등 뭔가를 추가할 수 있는데 추가작업이 있다면 조금 길지만 이전코드가 더 좋음.
  const [assets] = useAssets([require("./pop400_400.png")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return (
    //네비게이션컨테이너가 필요함 그냥 룰임
    //devjangdae test
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}