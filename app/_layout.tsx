import { useStorageState, setStorageItemAsync } from "@/hooks/useStorageState";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

//constantes
const HAS_LAUNCHED = 'HAS_LAUNCHED';



//Aqui inicia o react native com expo
export default function RootLayout() {
  const [hasLaunched, setHasLaunched] = useState(false);

  const getData = () => {
    //Verificar se o utilizador ja iniciou a app
    
  
    //verificar se ja deu launch a aplicacao ou nao
    useEffect(() => {
      const getData = async () => {
        const hasLaunched = await useStorageState(HAS_LAUNCHED);//receber o valor
  
        console.log("hasLaunched" + hasLaunched);//verificar o valor, remover depois
  
        if (hasLaunched) {
          setHasLaunched(true);//dar update ao state da var hasLaunched para true
        } else {
          await setStorageItemAsync(HAS_LAUNCHED, "true");//dar update ao valor que possui na storage
        }
      };
  
      getData().catch((error: Error) => { console.log(error) });//se der erro, apresentar o erro no console log
    }, [])//, [] para a funcao correr apenas uma vez no inicio da aplicacao
  }

  


  //verificar se existe dados sobre o utilizador na storage para poder fazer login automatico

  return (
    <SafeAreaView >
      <Stack>
      //Check if user already has launched the app
        {hasLaunched ?
          //Se ja deu launch a aplicacao, ir para a pagina principal
          <Stack.Screen name="index" />
          : //Se nunca correu a aplicacao, apresentar o login e o a apresentacao inicial
          <Stack.Screen name="index" />
        }
      </Stack>
    </SafeAreaView >
  );
}
