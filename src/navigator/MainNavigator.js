import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Signup1Screen from '../screens/Signup1Screen';
import Signup2Screen from '../screens/Signup2Screen';
import Signup3Screen from '../screens/Signup3Screen';
import VerificationScreen from '../screens/VerificationScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {


    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: false,
                    headerShown: false,
                    presentation: "card"
                }}
                initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Signup1" component={Signup1Screen} />
                <Stack.Screen name="Signup2" component={Signup2Screen} />
                <Stack.Screen name="Signup3" component={Signup3Screen} />
                <Stack.Screen name="Verify" component={VerificationScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default MainNavigator;