import { StyleSheet, Image, Platform, View, Text, SafeAreaView, StatusBar } from 'react-native';

import { useStorageState } from '@/hooks/useStorageState';

import { useSession } from '@/ctx';

export default function TabTwoScreen() {
  const { signOut } = useSession();
  const [[isLoading, user], setUser] = useStorageState('User');

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  let userInfo: object = JSON.parse(user);

  return (
    <SafeAreaView className="flex flex-col gap-5 p-5">
      {/* Header */}
      <Text className="font-bold text-4xl text-[#432C81]">
        Settings
      </Text>
      <View className="flex flex-col items-center">
        <Image source={{ uri: 'https://iili.io/d9Xhjrg.png' }} className="w-20 h-20 mb-2" />
        <Text className="font-bold text-xl text-[#432C81]">
          {userInfo.realName}
        </Text>
        <Text>
          {userInfo.email}
        </Text>
      </View>

      {/* Option */}
      <View>
        <View>
          <Text
            className="rounded-md bg-indigo-500 text-white py-4 px-6 w-full font-medium hover:bg-indigo-600 justify-center mb-4"
            onPress={() => {
              // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
              signOut();
            }}>
            Sair!
          </Text>
        </View>
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