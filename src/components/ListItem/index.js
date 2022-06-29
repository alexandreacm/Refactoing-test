import React, { useRef } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";

export default function ListItem({ data, timeStamp, onPress }) {
  const renderRef = useRef(null);
  return (
    <>
      <Text style={{ marginBottom: 10 }}>
        Renders children {renderRef.current++}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, separators }) => (
          <TouchableHighlight
            onPress={onPress}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <View style={{ backgroundColor: "white" }}>
              <Text>{item.title}</Text>
              <Text>{timeStamp}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </>
  );
}
