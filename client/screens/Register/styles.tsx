import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    registerForm: {
        flex: 1,
        alignSelf: 'center',
        width:'100%',
        flexDirection: "column",
        padding: 30,
        backgroundColor: "#FFFFFF",
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',       

    },
    registerContainer: {
        flex: 1,
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },

    title: {
        fontSize: 30,
        color: "#413C69",
        fontWeight: "500",
        marginBottom: 10,
        alignSelf: "center",
    },
    emailContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    textinput: {
        flex: 1,
        width: "90%",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        marginLeft: 10,
        marginTop: 20,
        top: -10,
    },
    containerButton: {
        flex: 1,
        width: "100%",
      },
    button: {        
        width: "100%",
        marginTop: 10,
        borderRadius: 7,
        backgroundColor: "#413C69",

    },
    btntext: {
        color: "#FFFFFF",
        margin: 8,
        textAlign: "center",
    },
    lowText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
      },
})

export default styles;