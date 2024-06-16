import {
    View,
    Text,
    StyleSheet
} from "react-native";

type NotificationDataProps = {
    title: Date;
    description: string;
    dateTime: Date;
};

const NotificationItem: React.FC<NotificationDataProps> = ({ title, description, dateTime }) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>{description}</Text>
                <Text style={styles.text}>Data: {dateTime.toString().substring(0, 10)}</Text>
                <Text style={styles.text}>Horário: {dateTime.toString().substring(11, 19)}</Text>
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

export default NotificationItem;