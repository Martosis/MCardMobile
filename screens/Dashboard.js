import React, { Fragment, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Exit from "../assets/exit.svg";
import Plus from "../assets/plus.svg";
import Logo from "../assets/logo.svg";
import Card from "../components/Card";

export default function Dashboard() {
	const [canScroll, setCanScroll] = useState(true);

	function onSwipeUpdate(state) {
		setCanScroll(state);
	}

	return (
		<Fragment>
			<SafeAreaView style={styles.header}>
				<Logo style={{ marginLeft: 15 }} width={150} height={52.5} />
				<Exit width={30} height={30} style={{ marginHorizontal: 15 }} />
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#C0C4BC",
					flex: 1,
				}}
			>
				<ScrollView
					contentContainerStyle={styles.container}
					scrollEnabled={canScroll}
				>
					<Text style={styles.tasks}>Tasks</Text>
					<Card
						course="AP Calculus BC"
						name="OneNote Practice"
						due="8/21/2021"
						onScroll={onSwipeUpdate}
					/>
					<Card
						course="AP Physics C: Mechanics"
						name="Khan Academy"
						due="8/21/2021"
						onScroll={onSwipeUpdate}
					/>
					<Plus style={{ marginTop: 10 }} />
				</ScrollView>
			</View>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	logo: {
		paddingHorizontal: 20,
	},
	header: {
		flexDirection: "row",
		backgroundColor: "#5e7e4d",
		height: 125,
		alignItems: "center",
		justifyContent: "space-between",
	},
	tasks: {
		fontSize: 36,
		color: "#555",
		marginVertical: 10,
	},
	container: {
		flexDirection: "column",
		alignItems: "center",
	},
});
