import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	root: {
		flexDirection: "column",
		marginVertical: 50,
        width: '100%',
	},
	title: {
		textAlign: "center",
		margin: 20,
		fontSize: 23,
		color: "#413C69",
		fontWeight: "500",
	},
    list: {
        width: '100%',
        marginTop: 15,
        alignItems: 'center'
    },
    listItem: {
      width: '80%',
    }
});

export default styles;
