import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Button, Image } from "react-native";
//import someListener from "some-listener-library";
import ListItem from "../../components/ListItem";

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

const store = new Set();

function Refactor() {
  const [currentTimeStamp, setCurrentTimeStamp] = useState(
    new Date().toLocaleString()
  );
  const [dataSet] = useState([
    {
      id: 1,
      title: "Item-1",
    },
    {
      id: 2,
      title: "Item-2",
    },
    {
      id: 3,
      title: "Item-3",
    },
  ]);

  useEffect(() => {
    // someListener.register((e) => {
    //   // This callback for the listener is arbitrary
    // });

    return () => console.log("UNMOUNT");
  }, []);

  const getTimeStamp = useCallback(() => {
    return new Date().toLocaleString();
  }, [currentTimeStamp]);

  const getIsNightTime = () => {
    return currentTimeStamp.endsWith("PM");
  };

  const renderLightHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={{
            uri: "https://png.pngtree.com/png-vector/20190826/ourmid/pngtree-clear-sky-in-the-daytime-png-image_1699567.jpg",
          }}
        />
        <Text>It is day time</Text>
      </View>
    );
  };

  const renderDarkHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={{
            uri: "https://img.freepik.com/free-vector/night-sky-with-crescent-moon-shiny-stars-clouds_1108-609.jpg?w=360",
          }}
        />
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
          It is night time
        </Text>
      </View>
    );
  };

  function onChangeDate() {
    setCurrentTimeStamp(getTimeStamp());
  }

  store.add(getTimeStamp);
  store.add(getIsNightTime);
  store.add(renderLightHeader);
  store.add(renderDarkHeader);

  return (
    <View style={{ flex: 1, padding: 30 }}>
      {getIsNightTime() ? renderDarkHeader() : renderLightHeader()}
      <View style={{ width: "100%", height: 60, marginTop: 60 }}>
        <Text>Current Time: {currentTimeStamp}</Text>
        <Button title="Update Timestamp" onPress={onChangeDate} />
      </View>

      <ListItem
        data={dataSet}
        timeStamp={currentTimeStamp}
        onPress={onChangeDate}
      />

      <Text>Total renders: {store.size - 4}</Text>
    </View>
  );
}
export default Refactor;
/*
Write your notes below:
1 - I would change to a functional component or arrow function component to return my JSX component.
2 - I would use Typescript.
3 - I would use the useState hook to create the currentTimeStamp.
4 - I would use the useEffect hook and not componentDidMount to register the listeners.
5 - I can use functions in all my functions.
6 - I can refactor this code and create another component with my FlatList and receive the data by props.
7 - I need to change widht to width in renderLightHeader, renderDarkHeader because the name is wrong.
8 - I can use styled-components. I think it's better
9 - I can use the useCallback hook.
10 - I can use the memo hook maybe in my ListItem.

https://github.com/alexandreacm/Refactoing-test.git
*/
