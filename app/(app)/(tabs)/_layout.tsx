import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIoIcon } from '@/components/navigation/TabBarIoIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
           title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIoIcon name={focused ? 'home' : 'home-outline'} color="#000" /> 
          ),
        }}
      />
      {/* {color} */}
      {/* <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIoIcon name={focused ? 'stats-chart' : 'stats-chart-outline'} color="#000" />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIoIcon name={focused ? 'notifications' : 'notifications-outline'} color="#000" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIoIcon name={focused ? 'settings-sharp' : 'settings-outline'} color="#000" />
          ),
        }}
      />
    </Tabs>
  );
}
