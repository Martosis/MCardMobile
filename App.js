import React, { Fragment, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={"dashboard"}>
				<Stack.Screen
					name="login"
					component={Login}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="dashboard"
					component={Dashboard}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
