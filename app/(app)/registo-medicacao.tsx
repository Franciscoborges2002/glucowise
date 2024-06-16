import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useStorageState } from "@/hooks/useStorageState";
import { router } from 'expo-router';

interface Diabetes {
    dateTime: Date;
    level: number;
}

interface Medication {
    name: string;
    perscription: string;
    quantity: string;
    description: string;
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
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [perscription, setPerscription] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const [[isLoading, user], setUser] = useStorageState('User');

    //acabar de carregar os dados
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    let userInfo: User = JSON.parse(user);

    const validateForm = () => {
        let errors = {};

        if (name === "") {//ver melhor depois, nao sei os valores
            errors.name = "Não existe valor para o nome!";

            Alert.alert("OOPS!", "Não existe valor para o nome!");
        }

        if (quantity === "") {//ver melhor depois, nao sei os valores
            errors.quantity = "Não existe valor para a quantidade!";

            Alert.alert("OOPS!", "Não existe valor para a quantidade!");
        }

        if (perscription === "") {//ver melhor depois, nao sei os valores
            errors.perscription = "Não existe valor para a perscrição!";

            Alert.alert("OOPS!", "Não existe valor para a perscrição!");
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    }

    const handleSubmit = () => {
        if (!validateForm()) {//ver melhor depois, nao sei os valores
            return null;//Retornar e aparecer o alerta
        }

        let newUserInfo;

        newUserInfo = {
            ...userInfo,
            medication: [
                ...userInfo.medication,
                {
                    name: name,
                    perscription: perscription,
                    quantity: quantity,
                    description: description
                }
            ]
        }

        newUserInfo = JSON.stringify(newUserInfo);

        setUser(newUserInfo);

        router.back();//Ir uma vez para tras
        router.back();//Ir para o menu principal
    };

    return (
        <View className="flex flex-col gap-[5%] px-5 pt-5">
            {/* Parte inicial */}
            <View className="flex items-center  mb-5">
                <Text className="font-bold text-2xl items-center">
                    Registar Nivel de Glicose!
                </Text>
            </View>

            <View className="flex flex-col ">

                {/* Forms */}
                <View className="flex flex-col">
                    <TextInput
                        className="appearance-none rounded-md py-4 px-6 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-5"
                        keyboardType="default"
                        onChangeText={(text) => setName(text)}
                        placeholder="Nome do remédio!"
                    />
                    <TextInput
                        className="appearance-none rounded-md py-4 px-6 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-5"
                        keyboardType="default"
                        onChangeText={(text) => setPerscription(text)}
                        placeholder="Perscrição!"
                    />
                    <TextInput
                        className="appearance-none rounded-md py-4 px-6 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-5"
                        keyboardType="numeric"
                        onChangeText={(text) => setQuantity(Number(text))}
                        placeholder="Quantidade!"
                    />
                    <TextInput
                        className="appearance-none rounded-md py-4 px-6 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mb-5"
                        keyboardType="default"
                        onChangeText={(text) => setDescription(text)}
                        placeholder="Descrição!"
                    />
                    <Button onPress={handleSubmit} title="Enviar" color="#432C81" />
                </View>
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