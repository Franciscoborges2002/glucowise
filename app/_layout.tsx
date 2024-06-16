import { useStorageState, setStorageItemAsync } from "@/hooks/useStorageState";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from "expo-router";
import { SessionProvider } from '../ctx';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView } from "react-native";
import SafeView from "@/constants/SafeViews";
import mongoose from 'mongoose';
import BdConnection from "@/constants/BdConnection"

//constantes
const HAS_LAUNCHED = 'HAS_LAUNCHED';

// Prevent the splash screen from auto-hiding before asset loading is complete.
//SplashScreen.preventAutoHideAsync();

const connectDB = async () => {
  
};

//Aqui inicia o react native com expo
export default function RootLayout() {
  /* useEffect(async () => {
    try {
      const connection = await mongoose.connect(BdConnection.URL)
        console.log('MongoDB connected');
    } catch (err: any) {
      console.error(err.message);
      // Exit process with failure
    }
  }, []); */
  //Var para verificar se o utillizador ja inicializou a aplicacao ou nao
 /*  const [hasLaunched, setHasLaunched] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  //Set log in to true or false
  useEffect(() => {
    setSignedIn(true);
  }); */

  //Get color scheme from 
  // const colorScheme = useColorScheme();
  /* const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  


  //Se nao deu load a font dar erro
  if (!loaded) {
    return null;
  }
 */

  //verificar se ja deu launch a aplicacao ou nao
  /*   useEffect(() => {
      const getData = async () => {
        const hasLaunched = await useStorageState(HAS_LAUNCHED);//receber o valor
        setHasLaunched(string2Bool(hasLaunched));
  
        /* if (hasLaunched) {
          setHasLaunched(true);//dar update ao state da var hasLaunched para true
        } else {
          await setStorageItemAsync(HAS_LAUNCHED, "true");//dar update ao valor que possui na storage
        }  
      };
  
      getData().catch((error: Error) => { console.log(error) });//se der erro, apresentar o erro no console log
    }, [])//, [] para a funcao correr apenas uma vez no inicio da aplicacao */

  //console.log(getData())

  //setHasLaunched(true);

  //verificar se existe dados sobre o utilizador na storage para poder fazer login automatico

  {/*<SafeAreaView style={SafeView.droidSafeArea}>
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
         <Stack screenOptions={{
          headerShown: false
        }}>



          {/* //Check if user already has launched the app
          {hasLaunched ?
            //Se ja deu launch a aplicacao, ir para a pagina principal
            <Stack.Screen name="index" />
            : //Se nunca correu a aplicacao, apresentar o login e o a apresentacao inicial
            <Stack.Screen name="index" />
          } 
          {
            signedIn === true ? (
              <>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
              </>
            )
              :
              <Stack.Screen name="signInPage"/>
          }
        </Stack> 

        


      </ThemeProvider>
    </SafeAreaView>*/}

  return (

    <SafeAreaView style={SafeView.droidSafeArea}>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </SafeAreaView >
  );
}
