import {
    View,
    Text,
    StyleSheet
} from "react-native";

type MedicacaoDataProps = {
    name: string;
    perscription: string;
    quantity: number;
    description: string;
};

const MedicacaoItem: React.FC<MedicacaoDataProps> = ({ name, perscription, quantity, description }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                   Nome:  {name}
                </Text>
                <Text style={styles.text}>Perscrição: {perscription}</Text>
                <Text style={styles.text}>Quantity: {quantity}</Text>
                <Text style={styles.text}>Descrição: {description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        marginTop: 10
    },
    box: {
        backgroundColor: "#EDECF4",
        width: "100%",
        borderRadius: 20,
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 10,
        lineHeight: 24,
    },
});

export default MedicacaoItem;