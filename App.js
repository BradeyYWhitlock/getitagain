import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './components/home/HomePage'
import ListPage from './components/list/ListPage'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './state/reducers/index';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AddMeal from './components/addMeal/AddMeal'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

const store = createStore(combineReducers);

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Meals" component={HomePage} />
      <Stack.Screen name="Add Meal" component={AddMeal} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}>
          <Tab.Screen
            name="Meals"
            component={HomeStackNavigator}
            options={{
              tabBarLabel: 'Meals',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 style={{ fontSize: 20, color }} name='utensils' />
              ),
            }} />
          <Tab.Screen
            name="Grocery List"
            component={ListPage}
            options={{
              tabBarLabel: 'Grocery List',
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 style={{ fontSize: 20, color }} name='list' />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider >
  );
}