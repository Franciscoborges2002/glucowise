import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useStorageState } from "@/hooks/useStorageState";
import { Dropdown } from 'react-native-element-dropdown';

interface DiabetesLevelFormProps {
  onSubmit: (level: number) => void; // Callback function to handle form submission
}

export default function diabetesMedication() {
  const [level, setLevel] = useState<number>(0);
  const [errors, setErrors] = useState({});
  const [[isLoading, user], setUser] = useStorageState('User');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  let userInfo: object = JSON.parse(user);

  console.log(userInfo)

  //acabar de carregar os dados
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  //dados para o dropdown
  const data = [
    { label: 'Pré-diabetes', value: 'Pré-diabetes' },
    { label: 'Diabetes tipo 1', value: 'Diabetes tipo 1' },
    { label: 'Diabetes tipo 2', value: 'Diabetes tipo 2' },
    { label: 'Diabetes Gestacional', value: 'Diabetes Gestacional' },
  ];


  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const validateForm = () => {
    let errors = {};

    if (level < 0 || level > 10) {//ver melhor depois, nao sei os valores
      errors.levels = "Valor nao existe, no contexto da glicose!";

      Alert.alert("OOPS!", "Valor da glicose não está correto!");
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }


  const handleSubmit = (level: number, tipoDiabetes: string) => {
    if (!validateForm()) {//ver melhor depois, nao sei os valores
      return null;//Retornar e aparecer o alerta
    }

    //Verificar se tem a propriedade diabetes
    if (!userInfo.hasOwnProperty("tipoDiabetes") && !userInfo.hasOwnProperty("diabetes")) {
      let newUserInfo = {
        ...userInfo,
        tipoDiabetes: tipoDiabetes,
        diabetes: [
          {
            dateTime: new Date(),
            level: level
          }
        ]
      }
    } else {//se ja tiver as properidades

    }


    // Here you would typically save the level to a database or perform other actions


  };

  return (
    <View className="flex flex-col gap-[5%] px-5 pt-5">
      {/* Parte inicial */}
      <View className="flex items-center">
        <Text className="font-bold text-2xl items-center">
          Registar Nivel de Glicose!
        </Text>

      </View>
      {
        "tipoDiabetes" in userInfo ? (
          <View>
            <View style={styles.container}>
              {renderLabel()}
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>
        ) : (
          <>
          </>
        )
      }
      {/* Forms */}
      <View className="flex flex-col">
        <TextInput
          className="appearance-none rounded-md py-4 px-6 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-5"
          keyboardType="numeric"
          onChangeText={(text) => setLevel(Number(text))}
          placeholder="Insere o nivel de glicose!"
        />
        <Button onPress={handleSubmit} title="Enviar" color="#432C81" />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    height: 40,
    marginBottom: 20,
    paddingLeft: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});