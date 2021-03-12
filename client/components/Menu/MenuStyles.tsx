import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#fff',
        top: 20
    },
    view: {
        backgroundColor: "rgb(74, 71, 163)"
    },
    image: {
        height: 40,
        width: 40,
        top: 10,
        borderRadius: 25
    },
    viewMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 10 
    },
    button: {
        height: 60,
        width: 80,
        padding: 15,
        backgroundColor: 'rgb(167, 197, 235)',
        borderRadius: 10,
        top: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'center'
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
    },
    button2: {
        height: 65,
        width: 150,
        backgroundColor: 'rgb(65, 60, 105)',
        borderRadius: 15,
        paddingLeft: 5,
        paddingTop: 20,
        flexDirection: 'row'
    },
    buttonText2: {
        color: 'rgb(167, 197, 235)',
        fontSize:  14,
        fontWeight: 'bold',
        marginLeft: 3
        
    },
    viewButton2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',  
        top: 50    
    },
    viewBalance: {
        top: 40,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    balanceText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    viewGeneral: {
        height: 200,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 15,
        top: 30,
        marginBottom: 60,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
            },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold', 
        top: 10, 
        alignSelf: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        top: 40
    },
    number: {
        fontSize: 18.5,
        fontWeight: 'bold',
        top: 8
    },
    periodoButton:{
        top: 50
    },
    titulo2: {
        fontSize: 14,
        fontWeight: 'bold',
        top: 70,
        alignSelf: 'center'
    }
    
})
export default styles;