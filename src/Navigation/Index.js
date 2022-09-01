import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../Screen/Welcome';
import ButtonNav from './ButtonNav';
import Login from '../Screen/Login';
import { UserContext } from '../Context/User';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    const { user } = useContext(UserContext)

    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName='Welcome'
            >
            {user ? 
            <Stack.Screen 
                name="Home" 
                component={ButtonNav}
                options={{ title: '', headerShown: false }}
            />
            :
            <>
            <Stack.Screen 
                name="Welcome" 
                component={Welcome} 
                options={{ title: '', headerShown: false }}
            />
                
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{ title: '', headerShown: false }}
            />
            </>
            }     
            </Stack.Navigator>
        </NavigationContainer>
    )
}