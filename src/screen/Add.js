import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{ flex : 1, alignItems : 'center', justifyContent : 'center' }}>
        <Text> Add Screm </Text>
      </View>
    );
  }
}
