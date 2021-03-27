import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
        alignSelf: 'flex-start',
        top: 40
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
        flexDirection: 'column',
        justifyContent: 'space-evenly'

    },
    contentEl: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        color: "#FFFFFF",
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
        top: 100
    },


    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    account: {
        color: 'grey',
        fontSize: 14.5
    },

    titleTransfer: {
        color: 'rgb(65, 60, 105)',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '5%',
        justifyContent: 'space-evenly'
    },
    button: {
        width: "100%",
        marginTop: 10,
        borderRadius: 7,
        backgroundColor: "#413C69",

    },
    containerButton: {
        flex: 1,
        width: "100%",
    },
    btntext: {
        color: "#FFFFFF",
        margin: 8,
        textAlign: "center",
    }
})


export default styles