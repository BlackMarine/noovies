import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text } from "react-native"

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true); //로딩이 끝나면 호출해주는 함수
  const startLoading = async () => {
    //preLoad가 필요한 이유 : api호출하기, 어떤정보를 받아오기(notification정보 등등), 또는 DB를열고preload -> 어플켜면 바로접속가능, 또는 아이콘 로드하기
    await new Promise((resolve) => setTimeout(resolve, 10000))
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