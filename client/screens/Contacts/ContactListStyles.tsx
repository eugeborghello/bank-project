import { StyleSheet, StatusBar } from "react-native";


export const styles = StyleSheet.create({
    general: {
        top: 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    back: {
        marginLeft: '5%',
        top: 20
    },
    title: {
        color: 'rgb(65, 60, 105)',
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 20
    },
    recentGeneral: {
        top: 40
    },
    recentTitle: {
        color: 'rgb(65, 60, 105)',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '5%'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    contentEl: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center'
    },
    contentElImg: {
        height: 60,
        width: 60,
        top: 10,
        borderRadius: 50
    },
    contentElName: {
        alignSelf: 'center',
        top: 15
    },
    allContacts: {
        flexDirection: 'column',
    },
    subtitles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 90
    },
    sub1: {
        marginLeft: '5%',
        fontWeight: 'bold',
        fontSize: 14.5,
        color: 'grey'
    },
    sub2: {
        flexDirection: 'row'
    },
    sub2Text: {
        fontSize: 14.5,
        color: 'grey',
        marginRight: '10%'
    },
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignSelf: 'center',
        top: 100,
    },
    card: {
        backgroundColor:'rgb(229, 238, 249)',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
            },
        shadowOpacity: 0.30,
        shadowRadius: 16.00,
        elevation: 24,
        alignContent: 'center',
        width: 300,
        borderRadius: 11,
        height: 60,
        marginTop: 14       
    },
    cardCont: {
        flexDirection: 'row',
    },
    cardImg: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginTop: 3,
        marginRight: 10,
        marginLeft: 30
    },
    info: {
        justifyContent: 'space-evenly',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    account: {
        color: 'grey',
        fontSize: 14.5
    },
    myModal: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1
    },
    modalView: {
        height: 340,
        width: 280,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        //flexDirection: 'column',
        justifyContent: 'space-evenly',
        //alignItems: 'center'
    },
    close: {
        alignSelf: 'flex-end',
        marginTop: -10
    },
    photoandname: {
        //flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    buttons: {
        alignContent: 'center',
        justifyContent: 'space-between'
        
    },
    button: {
        backgroundColor: 'rgb(47, 46, 65)',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        marginTop: 10,
        paddingTop: 10
    },
    text: {
        color: 'white',
    },
    modalImg: {
            height: 60,
            width: 60,
            borderRadius: 50 
    },
    inputsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    inputContainer: {
        marginTop: 10,
        marginLeft: 10
    },
    inputTitle: {
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold',
        paddingBottom: 5
    },
    inputStuff: {
        flexDirection: 'row', 
        //marginLeft: 16
        
    },
    input: {
        height: 20,
        width: 150,
        borderBottomWidth: 1,
        marginLeft: 10,
        borderBottomColor: 'grey'
        
    },
    editButtons: {
       flexDirection: 'row',
       justifyContent: 'space-evenly'
    },
    saveButton: {
        backgroundColor: 'rgb(52, 168, 83)',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        marginTop: 10,
        paddingTop: 10
    },
    backButton: {
        backgroundColor: 'rgb(65, 60, 105)',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        width: 80,
        marginTop: 10,
        paddingTop: 10
    },
   
})