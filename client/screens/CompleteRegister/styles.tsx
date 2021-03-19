import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    padding: 30,
  },
  title: {
    fontSize: 30,
    color: "#413C69",
    fontWeight: "500",
    marginBottom: 10,
    alignSelf: "center",
  },
  inputContainer: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emailInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "90%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: 20,
    top: -10,
  },
  loginButton: {
    width: "100%",
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: "#413C69",
  },
  loginStyle: {
    color: "#FFFFFF",
    margin: 8,
    textAlign: "center",
  },
  container: {
    width: "100%",
  },
  buttonGStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    borderRadius: 7,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 8,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonTextStyle: {
    color: "#000000",
    margin: 8,
    padding: 40
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 40,
  },
  lowText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  lowText2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  logo: {
    marginTop: 30,
  },
  error: {
    color: "red",
    textAlign: "center",
    margin: 10,
  },
});

export default styles;
