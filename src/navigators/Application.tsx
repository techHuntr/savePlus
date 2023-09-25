import React from 'react';
import { SafeAreaView, StatusBar, Image, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { Startup } from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import AccountBalance from '@/components/AccountBalance';
import SavingsGoal from '@/components/SavingsGoal';
import TransactionHistory from '@/components/TransactionHistory';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const Stack = createStackNavigator<ApplicationStackParamList>();
const Tab = createBottomTabNavigator();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;

  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  const MyStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="SavingsGoal"
        component={SavingsGoal}
        options={{
          headerTitle: () => (
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 16, textAlign: 'center' }}>
              Savings Goal
            </Text>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarLabel: () => null,
            tabBarStyle: {
              backgroundColor: 'white',
            },
          })}
        >
          <Tab.Screen name="Account Balance" component={AccountBalance} options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../theme/assets/images/home.png')} style={{ width: 20, height: 20, tintColor: focused ? 'blue' : 'gray' }} />;
            },
            tabBarStyle: {
              backgroundColor: 'white',
            },
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleAlign: 'center',
          }} />
          <Tab.Screen name="Savings Goal" component={SavingsGoal} options={{
            tabBarIcon: ({ focused }) => {
              return <Image source={require('../theme/assets/images/goal.png')} style={{ width: 20, height: 20, tintColor: focused ? 'blue' : 'gray' }} />;
            },
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleAlign: 'center',
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;
