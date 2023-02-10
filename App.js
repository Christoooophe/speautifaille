import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Accueil from './pages/Accueil';
import Connexion from './pages/Connexion';
import CreateAcount from './pages/CreateAcount';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Acc() {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: 'home',
              Rechercher: 'search',
              Library: 'folder'
            };
            return (
              <Icon
                name={icons[route.name]}
                color={color}
                size={30}
              />
            );
          },
          //Le code en dessous sert à retirer la border top de la barre de nav
          tabBarStyle: {
            borderTopWidth: 0,
            height : 60,
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#909992',
          activeBackgroundColor : '#000000',
          inactiveBackgroundColor : '#000000',
         }}
      >
          <Tab.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
          <Tab.Screen name="Rechercher" component={SearchPage} options={{headerShown: false}}/>
          <Tab.Screen name="Library" component={LibraryPage} options={{headerShown: false}}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Accueil'>
        <Stack.Screen name="Accueil" component={Accueil} options={{headerShown: false}}/>
        <Stack.Screen name="Connexion" component={Connexion} options={{headerShown: false}}/>
        <Stack.Screen name="Inscription" component={CreateAcount} options={{headerShown: false}}/>
        {/* En dessous, page qui nous ramène vers notre page principale du site via la function acc qui prend le tab navigator */}
        <Stack.Screen
          name="Acc"
          component={Acc}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

