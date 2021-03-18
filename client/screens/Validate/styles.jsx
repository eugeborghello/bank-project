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
  input: {
    width: "80%",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20
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
