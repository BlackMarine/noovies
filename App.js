import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from 'expo-font';
import { Text, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { Asset } from 'expo-asset';

//매개변수로 fonts배열을 받아서 [폰트,폰트 배열을 async.폰트,async.폰트..만들기]
const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font));

const loadImages = (images) => 
  images.map(image => {
  if(typeof image === "string"){
    return Image.prefetch(image)
  } else {
    return Asset.loadAsync(image)
  }
})

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true); //로딩이 끝나면 호출해주는 함수
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    //console.log(fonts);

    const images = loadImages([require("./pop400_400.png"), "https://d33wubrfki0l68.cloudfront.net/b152eb4214943f96e83c4babde026b12221e68f1/a20c2/img/oss_logo.png"])
    //console.log(images); 이제 fonts 배열과 images 배열을 가지고 큰 배열을 만듬 ... 이용
    await Promise.all([...fonts, ...images]);
    

    await new Promise((resolve) => setTimeout(resolve, 3000))
  }; //startAsync는 promise가 resolve되거나 종료됐을 때 promise를 반환해주는 함수

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error} //에러가 나오면 호출해주는 함수
      />
    );
  }
  return <Text>we are done loading!!!</Text>;
}