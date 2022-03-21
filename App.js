import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from 'expo-font';
import { Text, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from 'expo-asset';

export default function App() {
  const [assets] = useAssets([require("./pop400_400.png")]);
  const [loaded] = Font.useFonts([Ionicons.font]);
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return <Text>we are done loading!!!</Text>;
}