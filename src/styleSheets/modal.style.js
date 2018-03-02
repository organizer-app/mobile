import {StyleSheet} from "react-native";

export const modalStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopColor: '#595959',
    borderTopWidth: 0.2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  cancelButton: {
    borderRightWidth: 0.2,
    borderRightColor: '#595959',
  },
  blueText: {
    color: 'rgb(0,122,255)'
  },
  redText: {
    color: 'rgb(255,59,48)'
  },
  modalText: {
    paddingBottom: 20,
  },
  modalContent: {
    backgroundColor: "white",
    paddingTop: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
});