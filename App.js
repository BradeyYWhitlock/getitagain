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


const Tab = createBottomTabNavigator();

const store = createStore(combineReducers);
export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="List" component={ListPage} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
  );
}