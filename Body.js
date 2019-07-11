import React, { Component } from 'react';
import
{
  StyleSheet, View, Text, FlatList,
} from 'react-native';

import Task from './Task';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { todos } = this.props;
    return (
      <View style={styles.container}>
        <Text> Body </Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => <Task item={item} removeTask={this.props.removeTask} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
  },
});
