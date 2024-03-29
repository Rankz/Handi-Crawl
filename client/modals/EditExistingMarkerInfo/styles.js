import { StyleSheet } from "react-native";

const iconDimension = 50;

export const styles = StyleSheet.create({
  bubble: {
    flexDirection: "column",
    borderRadius: 20,
    width: "90%",
    height: 310,
    position: "absolute",
    bottom: "30%",
    backgroundColor: "#EAF0F2",
    paddingTop: "0%",
    alignSelf: "center",
    elevation: 23,
  },
  bubbleIcon: {
    flexDirection: "column",
    borderColor: "#476C7D",
    borderWidth: 5,
    borderRadius: 10,
  },
  descriptionContainer: {
    height: 60,
  },
  descriptionText: {
    backgroundColor: "#EAF0F2",
    borderRadius: 10,
    width: "80%",
    alignSelf: "flex-start",
    height: "100%",
    textAlignVertical: "top",
  },
  editBubble: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "flex-end",
    position: "absolute",
    zIndex: 1,
    top: 24,
    right: 10,
    alignSelf: "flex-end",
  },
  editContainer: {
    backgroundColor: "#CFE3E3",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 6,
    padding: 1,
    justifyContent: "space-between",
    elevation: 5,
  },
  editIcon: {
    width: iconDimension - 30,
    height: iconDimension - 20,
    bottom: "1%",
    marginRight: "2%",
  },
  generalIcon: {
    width: iconDimension,
    height: iconDimension,
  },
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#1C333E",
  },
  iconImgContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconText: {
    paddingLeft: 5,
  },
  iconTitle: {
    alignSelf: "center",
    zIndex: 1,
    position: "absolute",
    top: 23,
  },
  iconTitleText: {
    color: "#B7CCD3",
  },
  locationContainer: {
    flexDirection: "column",
  },
  locationTop: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: "1%",
  },
  middleBubble: {
    flex: 4,
    padding: "1%",
    zIndex: 0,
    top: 80,
    width: "100%",
    position: "absolute",
    borderTopColor: "#dcdddc",
    borderTopWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {},
  placeNameText: {
    backgroundColor: "#EAF0F2",
    borderRadius: 10,
    width: "80%",
    alignSelf: "flex-start",
    height: "100%",
    padding: 1,
  },
  propertyText: {
    paddingLeft: 15,
    fontFamily: "K2D_300Light_Italic",
    fontSize: 10,
  },
  scoreText: {
    fontSize: 30,
  },
  sendButton: {
    backgroundColor: "#75B0AF",
    alignSelf: "center",
    marginTop: 5,
    height: "15%",
    borderRadius: 10,
    justifyContent: "center",
    elevation: 3,
  },
  sendButtonUpdate: {
    margin: 4,
    color: "#DEE7EA",
    paddingLeft: 2,
    paddingRight: 2,
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdddc",
    marginBottom: 1,
  },
  thumbsContainer: {
    overflow: "hidden",
    flexDirection: "row",
    zIndex: 1,
    left: 10,
    top: 10,
    flex: 1,
    position: "absolute",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  thumbsIcon: {
    width: "30%",
  },
  trashIcon: {
    width: iconDimension - 20,
    height: iconDimension - 20,
    marginRight: "20%",
  },
});
