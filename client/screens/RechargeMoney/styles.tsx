import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		flexDirection: "column",
		padding: 10,
		marginTop: 30,
		marginHorizontal: 30,
	},
	title: {
		fontSize: 30,
		color: "#413C69",
		fontWeight: "500",
		marginBottom: 10,
		alignSelf: "center",
	},
	container: {
		flexDirection: "row",
		marginVertical: 10,
	},

	inputsCard: {
		width: "60%",
		padding: 5,
	},
	inputsCode: {
		width: "40%",
		padding: 5,
	},

	inputs: {
		borderBottomColor: "grey",
		borderBottomWidth: 1,
		width: "100%",
	},

	amount: {
		width: "100%",
		padding: 5,
	},

	inputAmount: {
		borderBottomColor: "grey",
		borderBottomWidth: 1,
		width: "40%",
	},

	rechargeButton: {
		width: "100%",
		marginVertical: 15,
		borderRadius: 7,
		alignSelf: "center",
		backgroundColor: "#413C69",
	},
	rechargeStyles: {
		color: "#FFFFFF",
		margin: 8,
		textAlign: "center",
	},
	mercado: {
		alignSelf: "center",
		marginVertical: 30,
	},
	mercadoLogo: {
		width: 250,
		height: 80,
	},
});

export default styles;
