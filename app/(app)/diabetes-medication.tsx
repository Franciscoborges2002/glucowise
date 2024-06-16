import { View, SafeAreaView, ScrollView, Text, Pressable, TouchableOpacity } from 'react-native';
import { useStorageState } from "@/hooks/useStorageState";
import { Link } from 'expo-router';
import MedicacaoItem from "@/components/MedicacaoItem"

interface Diabetes {
  dateTime: Date;
  level: number;
}

interface Medication {
  name: String;
  perscription: String;
  quantity: number;
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

export default function diabetesMedication() {
  const [[isLoading, user], setUser] = useStorageState('User');

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  let userInfo: User = JSON.parse(user);

  console.log(userInfo.medication)

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View className="w-full p-5">
        {
          userInfo.medication.length > 0 ? (
            <View className="flex flex-col h-[95%]">
              <View>
                <Text>
                  <Text className="mb-2 font-bold text-xl w-full flex justify-center">
                    {userInfo.medication.length}
                  </Text>
                  {"\xA0"}{/* dar um eswpaco */}
                  medicações!
                </Text>

              </View>

              <ScrollView>
                {
                  userInfo.medication.map((item) => (
                    <MedicacaoItem
                      key={item.name}
                      name={item.name}
                      perscription={item.perscription}
                      quantity={item.quantity}
                      description={item.description}
                    />
                  ))
                }

              </ScrollView>
              <View className="items-end mt-20">
                <Link href="registo-medicacao">
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
              <Link href="registo-medicacao" className="text-xl font-bold text-slate-400 text-center my-8">
                Registar valores!
              </Link>
            </View>
          )
        }
      </View>
    </SafeAreaView >
  );
}
