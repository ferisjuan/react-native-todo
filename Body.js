import React, { Component } from 'react';
import
{
  StyleSheet, View, Text, FlatList, ActivityIndicator,
} from 'react-native';

import Task from './Task';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { todos, isLoading, removeTask } = this.props;
    return (
      <View style={styles.container}>
        {isLoading && <ActivityIndicator size="large" color="#640064" />}
        <Text> Body </Text>
        {!isLoading && (
          <FlatList
            data={todos}
            renderItem={({ item }) => <Task item={item} removeTask={removeTask} />}
          />
        )}
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
