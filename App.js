import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Accueil from './pages/Accueil';
import Connexion from './pages/Connexion';
import CreateAcount from './pages/CreateAcount';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage'
import LibraryPage from './pages/LibraryPage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Acc() {
  return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Search" component={SearchPage} />
          <Tab.Screen name="Library" component={LibraryPage} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Accueil'>
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={CreateAcount} />
        <Stack.Screen
          name="Home"
          component={Acc}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

