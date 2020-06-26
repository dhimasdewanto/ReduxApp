import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

interface RouteProps { }

const Stack = createStackNavigator()

export const Routes: React.FC<RouteProps> = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Detail" component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}