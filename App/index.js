import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
    backgroundColor:'#00cebd'
  },
  value: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    paddingRight: 20,
    // marginBottom: 10,
    backgroundColor:'#00cebd'
  }
});

export default class App extends React.Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState(state => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{backgroundColor:'white'}}>
        <Text style={styles.value}>
          {this.state.output}
        </Text>
          <Text style={styles.value}>
           {this.state.previousValue?parseFloat(this.state.previousValue).toLocaleString():null} {this.state.operator} {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="AC"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap("percentage")}
            />
            <Button
              text="&#9003;"
              theme="secondary"
              onPress={() =>this.handleTap("posneg")}
            />
            <Button
              text="&#247;"
              theme="accent"
              onPress={() => this.handleTap("operator", "/")}
            />
          </Row>
          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap("operator", "+")}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="accent"
              onPress={() => this.handleTap("number", 0)}
            />
            <Button text="." onPress={() => this.handleTap("number", ".")} />
            <Button
              text="="
              size="double"
              onPress={() => this.handleTap("equal")}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
