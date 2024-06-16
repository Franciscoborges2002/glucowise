import { View, Image, StyleSheet, Platform, Text, Pressable, TouchableOpacity } from 'react-native';

import { Link } from 'expo-router';

import { useStorageState } from '@/hooks/useStorageState';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [[isLoading, user], setUser] = useStorageState('User');

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  let userInfo: object = JSON.parse(user);

  /* if (user[1] !== null) {
    
  } else {//sign out from application
    //console.log("teste")
    signOut();
  } */


  return (
    <View className="p-2 pt-10">
      <ThemedView className="flex flex-row align-center p-2 bg-transparent pb-10 justify-between items-center px-3 pr-10">
        <View className="flex flex-row gap-2 items-center">
          <HelloWave />
          <ThemedText type="title" className="text-black">Hi, {userInfo.realName.split(" ")[0]}!</ThemedText>
        </View>
        <View>
          {/* <Link href="/settings"> */}
            <Image source={{ uri: 'https://iili.io/d9Xhjrg.png' }} className="w-10 h-10" />
   {/*        </Link> */}
        </View>
      </ThemedView>

      <View className="flex flex-col gap-2 w-full">
        {/* Diabetes Medication  */}
        <Link href="/diabetes-medication" className="bg-[#EDECF4] rounded-2xl p-5">
          <View className="flex flex-row justify-end">
            <Text>
              <Text className="font-bold text-2xl">Diabetes</Text>
              {"\n"}
              <Text className="font-bold text-2xl">Medication</Text>
            </Text>
            <View>
              <Image source={{ uri: 'https://iili.io/d91eXVe.png' }}
                style={{ width: 75, height: 75 }} />
            </View>
          </View>
        </Link>

        {/* Medical Hisotry  */}
        <Link href="/medical-history" className="bg-[#EDECF4] rounded-2xl p-5">
          <View className="flex flex-row justify-end items-center">
            <Text>
              <Text className="font-bold text-2xl">Medical History</Text>
            </Text>
            <View >
              <Image source={{ uri: 'https://iili.io/d91eNlj.png' }}
                style={{ width: 75, height: 75 }} />
            </View>
          </View>
        </Link>


        {/* Lab Results */}
        <Link href="/comming-soon" className="bg-[#EDECF4] rounded-2xl p-5">
          <View className="flex flex-row justify-end items-center">
            <Text>
              <Text className="font-bold text-2xl">Lab Results</Text>
            </Text>
            <View >
              <Image source={{ uri: 'https://iili.io/d91ewKb.png' }}
                style={{ width: 75, height: 75 }} />
            </View>
          </View>
        </Link>

        {/* Online Chat */}
        <Link href="/comming-soon" className="bg-[#EDECF4] rounded-2xl p-5">
          <View className="flex flex-row justify-end items-center">
            <Text>
              <Text className="font-bold text-2xl">Online Chat</Text>
            </Text>
            <View >
              <Image source={{ uri: 'https://iili.io/d91ehiu.png' }}
                style={{ width: 75, height: 75 }} />
            </View>
          </View>
        </Link>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
