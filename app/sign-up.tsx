import { useState } from 'react'
import { router, Link } from 'expo-router';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'

import { useSession } from '../ctx';

export default function SignIn() {

    const { signIn } = useSession();

    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");

    return (
        <View className="flex flex-col items-center pt-10 gap-5">
            <Text className="text-2xl font-bold uppercase text-center text-[#432C81] py-10">Registo</Text>
            <Image source={{ uri: 'https://iili.io/d9V6c57.png' }}
                style={{ width: 200, height: 200 }} />
            <View className="w-[75%] flex flex-col">
                <View className=" flex flex-col justify-between items-start">
                    <TextInput placeholder='Email or username' value={username} onChangeText={setUsername} autoCorrect={false}
                        autoCapitalize='none' className=" appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-5" />
                    <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} autoCorrect={false}
                        autoCapitalize='none' className=" appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </View>

                <View className="flex flex-col items-center mt-4">
                    <Text
                        className="rounded-md bg-[#432C81] text-white py-4 px-6 w-full font-medium hover:bg-indigo-600 justify-center mb-4"
                        onPress={(username: string, password: string) => {
                            console.log(username)
                            signIn(username, password);
                            // Navigate after signing in. You may want to tweak this to ensure sign-in is
                            // successful before navigating.
                            router.replace('/');
                        }}>
                        Registar
                    </Text>
                    <Text>
                        Já possuis conta?
                    </Text>
                    <Link href="/sign-in" className="text-lg text-center text-[#432C81]">
                        Autentica-te
                    </Link>
                </View>
            </View>
        </View>
    );
}