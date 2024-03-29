import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  bubble: {
    flexDirection: "column",
    width: "90%",
    height: 400,
    position: "absolute",
    bottom: "30%",
    backgroundColor: "#EAF0F2",
    paddingTop: "0%",
    borderRadius: 20,
    alignSelf: "center",
    elevation: 23,
  },
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#1C333E",
    textAlign: "center",
  },
  handiMarkerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderStyle: "solid",
    marginRight: 4,
    marginBottom: 4,
    width: 100,
    position: "relative",
    zIndex: 0,
  },
  iconButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
  },
  iconImg: {
    width: 60,
    height: 60,
    marginBottom: 3,
  },
  iconText: {
    paddingLeft: 5,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdddc",
    marginBottom: 1,
  },
});
