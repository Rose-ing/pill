import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-web-vector-icons/MaterialIcons';
import { colors } from '../theme/colors';

import Dashboard from '../screens/Dashboard';
import Calendar from '../screens/Calendar';
import AddMedicine from '../screens/AddMedicine';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = route.name === 'Home' ? 'home' : 'calendar-today';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.accent,
          borderTopWidth: 1,
        }
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Calendar" 
        component={Calendar}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddMedicine"
          component={AddMedicine}
          options={{
            title: 'Añadir Medicamento',
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.text.inverse,
            headerTitleStyle: {
              fontWeight: '600',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 