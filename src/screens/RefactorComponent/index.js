import React from "react";
import {
  View,
  FlatList,
  Text,
  TouchableHighlight,
  Button,
  Image,
} from "react-native";
import someListener from "some-listener-library";

/*
PURPOSE: The purpose of this exercise is for you to demonstrate
your understanding and ability to work with React Native components.
TASK:
- Refactor this component to make use of React Hooks.
- Identify and address any performance issues.
- Identify and address any poor code practices/implementation.
- In the comment block at the end of the file, write any notes about
what you did, anything you’ve identified and improved.
*/
/*
THINGS TO NOTE:
- someListener returns a remove function.
- This component is implemented poorly on purpose.
- This file is not meant to compile nor depend on the help of
linting or formatting tools. It is simple enough that we expect
you to identify what can be improved with it visually.
*/
class RefactorComponent extends React.Component {
  state = {
    currentTimeStamp: this.getTimeStamp(),
  };
  componentDidMount() {
    someListener.register((e) => {
      // This callback for the listener is arbitrary
    });
  }
  getTimeStamp() {
    const date = new Date();
    return date.toLocaleString();
  }
  getIsNightTime() {
    return this.state.currentTimeStamp.endsWith("PM");
  }
  renderLightHeader() {
    return (
      <View style={{ width: "100%", height: 100, backgroundColor: "white" }}>
        <Image
          style={{ widht: "100%", height: 100 }}
          resizeMode="contain"
          source={{ uri: "https://someurl.com/day-time.png" }}
        />
        <Text>It is day time</Text>
      </View>
    );
  }
  renderDarkHeader() {
    return (
      <View style={{ width: "100%", height: 100, backgroundColor: "black" }}>
        <Image
          style={{ widht: "100%", height: 100 }}
          resizeMode="contain"
          source={{ uri: "https://someurl.com/night-time.png" }}
        />
        <Text style={{ color: "white" }}>It is night time</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 30 }}>
        {this.getIsNightTime() ? this.renderDarkHeader : this.renderLightHeader}
        <View style={{ width: "100%", height: 60 }}>
          <Text>Current Time: {this.state.currentTimeStamp}</Text>
          <Button
            title="Update Timestamp"
            onPress={() =>
              this.setState({ currentTimeStamp: this.getTimeStamp() })
            }
          />
        </View>
        <FlatList
          data={this.props.dataSet}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              <View style={{ backgroundColor: "white" }}>
                <Text>{item.title}</Text>
                <Text>{this.getTimeStamp()}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}
export default RefactorComponent;
/*
Write your notes below:
*/
