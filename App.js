import React, { useState } from "react";
import { StyleSheet, Image } from 'react-native';
import Home from './screens/Home';
import Create from './screens/Create';
import Profile from './screens/Profile';
import Login from './screens/Login';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SessionProvider, { useSessionContext } from "./utils/context";
import Loading from "./screens/Loading";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()



function AppNavigator() {
  const value = useSessionContext()
  const logged = !!value.session
  const loading = value.loading


  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { color: 'black' },
        }}>
        <Tab.Screen name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={30}
                color={focused ? '#4CB5F9' : '#b3b3b3'} />),
          }} />
          <Tab.Screen name="Create"
          component={Create}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="add-circle"
                size={30}
                color={focused ? '#4CB5F9' : '#b3b3b3'} />),
          }} />
        <Tab.Screen name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                  source={{uri: value.session.pfp}} // Usa require o un oggetto con uri per immagini remote
                  style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15
                  }}
              />),
          }} />
      </Tab.Navigator>
    )
  }


  return (
    <NavigationContainer>
      {loading && <Loading />}
      {!loading && <Stack.Navigator>
        {logged && <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />}
        {!logged && <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />}
      </Stack.Navigator>}
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <SessionProvider>
      <AppNavigator />
    </SessionProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
