import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Body extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
    };
  }

  render()
  {
    return (
      <View style={styles.container}>
        <Text> {this.props.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
