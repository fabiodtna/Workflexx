import { React } from 'react';

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/pages/Login';
import Caccont from './src/pages/Createaccont';


import Cpost from './src/pages/signtk/Createpost';
import Eprofile from './src/pages/signtk/Editeprofile';
import Home from './src/pages/signtk/Home';
import Post from './src/pages/signtk/Post';
import Upost from './src/pages/signtk/Postuser';
import Profile from './src/pages/signtk/Profile';

// version 2.0 -> import Ranking from './src/pages/signtk/Ranking';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}  options={{headerShown: false}} />
        <Stack.Screen name='Caccont' component={Caccont}  options={{headerShown: false}} />
        
        
        <Stack.Screen name='Home' component={Home} options={{headerShown: false }}/>
        <Stack.Screen name='Post' component={Post} options={{ headerShown: false }}/>
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}