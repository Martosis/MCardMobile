import React, { useRef } from "react";
import { Animated, StyleSheet, View, Text, PanResponder } from "react-native";

export default function Card(props) {
	const pan = useRef(new Animated.ValueXY()).current;

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderGrant: () => {
				pan.setOffset({
					x: pan.x._value,
				});
				props.onScroll(false);
			},
			onPanResponderMove: Animated.event([null, { dx: pan.x }], {
				useNativeDriver: false,
			}),
			onPanResponderTerminate: () => {
				Animated.spring(pan, {
					toValue: 0,
					useNativeDriver: false,
				}).start();
			},
			onPanResponderRelease: () => {
				Animated.spring(pan, {
					toValue: 0,
					useNativeDriver: false,
				}).start();
				props.onScroll(true);
			},
		})
	).current;

	return (
		<Animated.View
			style={{
				width: "90%",
				transform: [{ translateX: pan.x }],
			}}
			{...panResponder.panHandlers}
		>
			<View style={styles.card}>
				<Text style={{ fontWeight: "bold" }}>{props.course}</Text>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					{props.name}
				</Text>
				<Text
					style={{ color: "#555", fontWeight: "bold", marginTop: 10 }}
				>
					Due: {props.due}
				</Text>
			</View>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		height: 100,
		borderRadius: 10,
		paddingLeft: 15,
		borderRightColor: "#569341",
		borderRightWidth: 20,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		marginBottom: 10,
	},
});
