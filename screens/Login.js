import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Logo from "../assets/logo.svg";
import Book from "../assets/book.svg";

export default function Login() {
	return (
		<View style={styles.container}>
			<Logo style={{ marginBottom: 20 }} />
			<TouchableOpacity style={styles.button}>
				<Text style={{ fontSize: 24, color: "#FFFFFF" }}>Log In</Text>
			</TouchableOpacity>
			<Book />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#5E7E4D",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		marginTop: 40,
		marginBottom: 50,
		height: 75,
		width: 200,
		borderColor: "#FFFFFF",
		borderWidth: 2,
		borderStyle: "solid",
		backgroundColor: "#5E7E4D",
		alignItems: "center",
		justifyContent: "center",
	},
});
