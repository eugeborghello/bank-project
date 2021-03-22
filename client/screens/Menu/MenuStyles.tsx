import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors.js";

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		color: colors.backgroundW,
		top: 20,
	},
	view: {
		padding: 4,
		backgroundColor: colors.backgroundV,
	},
	image: {
		height: 30,
		width: 30,
		top: 10,
		borderRadius: 25,
	},
	viewMenu: {
		flexDirection: "row",
		justifyContent: "space-between",
		top: 10,
		paddingLeft: 20,
		paddingRight: 20,
	},
	container: {
		backgroundColor: "white",
		borderTopRightRadius: 50,
		borderTopLeftRadius: 50,
		top: 30,
	},
	button: {
		height: 70,
		width: 160,
		borderColor: "black",
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		top: 5,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "black",
		fontSize: 14,
		fontWeight: "bold",
		marginLeft: 3,
	},
	viewButton: {
		flexDirection: "column",
		justifyContent: "space-between",
	},
	viewButtonRow: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		paddingTop: 10,
	},
	viewBalance: {
		top: 50,
		marginBottom: 30,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	balanceText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		padding: 8,
	},
	balanceText2: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
		right: -40,
	},
	viewCard: {
		height: 180,
		width: 290,
		backgroundColor: "white",
		borderRadius: 15,
		top: 30,
		marginBottom: 60,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		elevation: 24,
		alignSelf: "center",
	},
	titulo: {
		top: 5,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 5,
	},
	row: {
		paddingLeft: 20,
		paddingRight: 20,
		top: 40,
		alignSelf: "center",
	},
	tituloText: {
		fontSize: 18,
		// fontWeight: 'bold',
		top: 8,
	},
	numberView: {
		paddingLeft: 20,
		paddingRight: 20,
		top: 60,
		alignSelf: "center",
	},
	dateView: {
		top: 100,
		paddingLeft: 5,
	},
});
export default styles;
