import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from 'expo-font';
import { Text, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { Asset } from 'expo-asset';


export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true); //로딩이 끝나면 호출해주는 함수
  const startLoading = async () => {
    //preLoad가 필요한 이유 : api호출하기, 어떤정보를 받아오기(notification정보 등등), 또는 DB를열고preload -> 어플켜면 바로접속가능, 또는 아이콘 로드하기
    console.log("test");
    await Font.loadAsync(Ionicons.font); 
    try {
      await Asset.loadAsync(require("./pop400_400.png"));
    } catch (error) {
      console.log(error);
    }
    await Image.prefetch("https://d33wubrfki0l68.cloudfront.net/b152eb4214943f96e83c4babde026b12221e68f1/a20c2/img/oss_logo.png");
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
  return <Text>we are done loading</Text>;
}