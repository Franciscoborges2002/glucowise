import { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import DiabetesRegister from "../../components/DiabetesRegister";
import { useStorageState } from "@/hooks/useStorageState";

import { useEffect } from 'react';

interface Diabetes {
  dateTime: Date;
  level: number;
}

interface Medication {
  name: String;
  perscription: String;
  quantity: String;
  description: String;
}

interface User {
  username: string;
  email: string;
  password: string;
  realName: string;
  tipoDiabetes: string;
  token: string;
  diabetes: Array<Diabetes>;
  medication: Array<Medication>;
}

export default function TabTwoScreen() {
  const [[isLoading, user], setUser] = useStorageState('User');

  //acabar de carregar os dados
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  let userInfo: User = JSON.parse(user);

console.log(userInfo)

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View className="w-full p-5">
        {
          userInfo.diabetes.length > 0 ? (
            <View className="flex flex-col h-[95%]">
              <Text className="mb-2 font-bold text-xl w-full flex justify-center">
                {userInfo.tipoDiabetes}
              </Text>
              <ScrollView>
                {/* {
                  userInfo.diabetes.map((register) => (
                    <DiabetesRegister
                      key={register.dateTime}
                      dateTime={register.dateTime}
                      level={register.level}
                    />
                  ))
                } */}

              </ScrollView>
              <View className="items-end mt-20">
                <Link href="registo-diabetes">
                  <View className="w-10 h-10 bg-[#FEC62F] rounded-full items-center justify-center">
                    <Text className="text-xl">
                      +
                    </Text>
                  </View>
                </Link>
              </View>
            </View>
          ) : (
            <View>
              <Text className="text-lg text-slate-400 text-center my-8">
                Não existe nenhum registo de diabetes.
              </Text>
              <Link href="registo-diabetes" className="text-xl font-bold text-slate-400 text-center my-8">
                Registar valores!
              </Link>
            </View>
          )
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
