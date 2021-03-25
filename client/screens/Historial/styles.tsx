import { StyleSheet } from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'white',        
    },
    back: {
        flex: 0.5,
        backgroundColor: 'white',
        color: 'white',
        justifyContent: 'center',
        marginTop: 10,
    },
    title: {
        flex: 1.3,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    header: {
        flex: 0.5,
        flexDirection: 'row',
       
    },
    headerLeft: {
        flex: 1,
        alignItems: "flex-start",
        
    },
    headerRight: {
        flex: 1,
        alignItems: "flex-end",
        color: "#4A47A3",
        fontSize: 20,
        
    },
    bodyContainer: {
        flex: 1,
        
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: 'black',
		backgroundColor: 'rgb(167, 197, 235)',
        borderRadius: 10,
        marginBottom: 10,

    },
    iconTextContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
        alignItems: 'center',
	},
    icon: {
		height: 70,
		flexDirection: 'row',
        justifyContent: 'center',
		alignItems: 'center'
	},
    text:{
        flexDirection: 'column',

    },
    cardText: {
		color: 'black',
		fontSize: 14,
		fontWeight: 'bold',
		marginLeft: 3,
        fontFamily: "Roboto_500Medium",
	},
    cardText2: {
		color: 'black',
		fontSize: 10,
		marginLeft: 3,
        paddingTop: 5,
        fontFamily: "Roboto_300Light",
	},
    amount: {
        

    },
    
})

export default styles;