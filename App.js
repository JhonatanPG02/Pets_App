import React from 'react';
// import Welcome from './src/Screen/Welcome';
import Home from './src/Screen/Home';
import Navigation from './src/Navigation/Index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UserProvider from './src/Context/User';
import Login from './src/Screen/Login';

export default function App() {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <Navigation />
        {/* <Login />
        <Home /> */}
      </SafeAreaProvider>
    </UserProvider>
  )
}
