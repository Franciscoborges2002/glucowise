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
        <View style={styles.container} className="bg-[#432C81] rounded-lg p-2 w-full  text-white">
            <View style={styles.box}>
                <View>
                    <Text >
                        <Text style={styles.text} className="items-center">
                            Valor de glicose:
                        </Text>


                        <Text style={styles.title}>
                            {level}
                        </Text>
                    </Text>
                </View>
                <Text style={styles.text} className="">Data: {dateTime.toString().substring(0, 10)}</Text>
                <Text style={styles.text} className="">Horário: {dateTime.toString().substring(11, 19)}</Text>
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

export default DiabetesRegister;