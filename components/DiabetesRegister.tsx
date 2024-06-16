import {
    View,
    Text,
    StyleSheet
} from "react-native";

type DiabetesDataProps = {
    dateTime: Date;
    level: string;
};

const DiabetesRegister: React.FC<DiabetesDataProps> = ({ dateTime, level }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{level}</Text>
                <Text style={styles.text}>{dateTime}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    box: {
        backgroundColor: "#EDECF4",
        width: "100%",
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 10,
        lineHeight: 24,
    },
});

export default DiabetesRegister;