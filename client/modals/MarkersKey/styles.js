import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#EAF0F2",
    fontSize: 15,
    width: "80%",
    marginLeft: 8,
    flexWrap: "wrap",
    textAlign: "justify",
  },
  iconImg: {
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  infoModalView: {
    flexDirection: "column",
    borderRadius: 20,
    width: "90%",
    backgroundColor: "#1C333E",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "center",
    position: "absolute",
    top: "15%",
    paddingTop: 10,
    opacity: 0.9,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 10,
  },
});
