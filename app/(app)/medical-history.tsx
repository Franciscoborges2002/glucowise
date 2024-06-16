import { useState } from 'react';
import { StyleSheet, Image, ScrollView, View, Text, SafeAreaView, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import DiabetesRegister from "../../components/DiabetesRegister"
import { useStorageState } from "@/hooks/useStorageState";


import { useSession } from '../../ctx';
import { useEffect } from 'react';

export default function TabTwoScreen() {
  const [[isLoading, user], setUser] = useStorageState('User');

  const diabetes = {
    diabetes: [
      {
        id: 0,
        dateTime: "1997-07-16T19:20+01:00",
        level: 5
      },
      {
        id: 1,
        dateTime: "1997-07-16T19:20+01:00",
        level: 2
      },
      {
        id: 2,
        dateTime: "1997-07-16T19:20+01:00",
        level: 5
      },
      {
        id: 3,
        dateTime: "1997-07-16T19:20+01:00",
        level: 2
      }
    ]
  }

  let userInfo: object = JSON.parse(user);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View className="w-full p-5">
        {
          diabetes.diabetes.length > 0 ? (
            <View className="flex flex-col w-full">
              <ScrollView className="w-full">
                {diabetes.diabetes.map((register) => (
                  <DiabetesRegister
                    key={register.id}
                    dateTime={register.dateTime}
                    level={register.level}
                  />
                ))}

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
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
