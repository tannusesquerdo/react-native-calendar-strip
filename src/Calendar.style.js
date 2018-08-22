/**
 * Created by bogdanbegovic on 8/26/16.
 */

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    overflow: "hidden"
  },
  datesStrip: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
  },
  calendarDates: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  calendarHeader: {
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    minWidth: 120,
    marginVertical: 10,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  icon: {
    resizeMode: "contain"
  },

  //CALENDAR DAY
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  dateName: {
    textAlign: "center"
  },
  weekendDateName: {
    color: "#A7A7A7",
    textAlign: "center"
  },
  dateNumber: {
    fontWeight: "normal",
    textAlign: "center"
  },
  weekendDateNumber: {
    color: "#A7A7A7",
    fontWeight: "bold",
    textAlign: "center"
  }
});
