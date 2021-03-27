import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		flexDirection: "column",
		marginVertical: 20,
	},
	title: {
		textAlign: "center",
		margin: 20,
		fontSize: 23,
		color: "#413C69",
		fontFamily: "Roboto_500Medium"
	},
	list: {
		width: "80%",
		marginTop: 15,
		alignSelf: "center",
	},
	listItem: {
		marginVertical: 10,
		fontSize: 16,
		paddingHorizontal: 10,
	},
	itemsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		marginVertical: 15,
	},
	charts: {
		marginVertical: 8,
		borderRadius: 16,
	},
	buttonsContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	button: { 
		width: "30%", 
		margin: 5 
	}
});

export default styles;
