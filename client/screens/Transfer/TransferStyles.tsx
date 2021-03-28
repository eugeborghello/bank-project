import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	general: {
		marginVertical: 20,
		flexDirection: "column",
		padding: 30,
	},
	title: {
		color: "rgb(65, 60, 105)",
		fontSize: 26,
		fontWeight: "bold",
		alignSelf: "center",
	},
	recentTitle: {
		color: "rgb(65, 60, 105)",
		fontSize: 16,
		fontWeight: "bold",
		marginVertical: 15,
	},
	contacts: {
		flexDirection: "row",
		alignItems: "center",
	},
	avatar: {
		marginTop: 10,
		height: 60,
		width: 60,
		borderRadius: 50,
		marginHorizontal: 8,
	},
	contactName: {
		alignSelf: "center",
		width: "70%",
		top: 15,
	},
	content: {
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	contentEl: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignContent: "center",
		color: "#FFFFFF",
	},
	addButton: {
		height: 60,
		width: 60,
		top: 10,
		borderRadius: 50,
		backgroundColor: "#4a47a3",
	},
	inputsContainer: {
		alignSelf: "center",
		marginTop: 40,
		width: "80%",
	},
	inputs: {
		borderBottomColor: "grey",
		borderBottomWidth: 1,
		marginVertical: 15,
		marginLeft: 6,
		width: "100%",
	},
	inputWrapper: {
		flexDirection: "row",
		marginVertical: 5,
	},
	titleTransfer: {
		color: "rgb(65, 60, 105)",
		fontSize: 16,
		fontWeight: "bold",
	},
	checkContainer: {
		width: "80%",
		alignSelf: "center",
	},
	button: {
		width: "100%",
		marginTop: 10,
		borderRadius: 7,
		backgroundColor: "#413C69",
	},
	containerButton: {
		width: "80%",
		alignSelf: "center",
	},
	btntext: {
		color: "#FFFFFF",
		margin: 8,
		textAlign: "center",
	},
});

export default styles;
