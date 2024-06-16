import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useStorageState } from "@/hooks/useStorageState";
import NotificationItem from "../../../components/NotificationItem"

interface Notification {
  title: string;
  description: string;
  dateTime: Date;
}

interface Notifications {
  notifications: Array<Notification>
}


export default function HomeScreen() {
  const [[isLoading, notification], setNotification] = useStorageState('Notifications');

  //acabar de carregar os dados
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  let notificationsGotten: Notifications = JSON.parse(notification);

  console.log("notifications", notificationsGotten)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        notificationsGotten === null ? (
          <View>
            <Text className="text-lg text-slate-400 text-center my-8">
              Não existem Notificações!
            </Text>
          </View>
        ) : (
          <View className="flex flex-col h-[95%] w-full p-5">
            <Text>
              <Text className="mb-2 font-bold text-lg">
                {notificationsGotten.notifications.length}
              </Text>
              {"\xA0"}{/* dar um eswpaco */}
              Notificações
            </Text>

            <ScrollView >
              {
                notificationsGotten.notifications.map((item) => (
                  <NotificationItem
                    key={item.dateTime}
                    title={item.title}
                    description={item.description}
                    dateTime={item.dateTime}
                  />
                ))
              }

            </ScrollView>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: "100%"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
