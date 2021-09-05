import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4.5;

const styles = StyleSheet.create({
  text: {
    color:"black",
    fontSize: 25
  },
  textSecondary: {
    color: "#00cebd",

  },
  button: {
    backgroundColor: "white",
    flex: 1,
    height: Math.floor(buttonWidth - 20),
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: Math.floor(buttonWidth),
    borderRadius:12,
    margin: 10,
    elevation:3
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "center",
    backgroundColor:'#00cebd',
    justifyContent:'center'
  },
  buttonSecondary: {
    backgroundColor: "white",
    width:'100%'
  },
  buttonAccent:{
    backgroundColor: "white",
    justifyContent:'center',
    alignItems:'center'
  },
  textAccent:{
    color:'#00cebd'
  }
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble)
    textStyles.push({color:'white'})
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
