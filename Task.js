import React, { Component } from 'react';
import
{
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.item.task}</Text>

        <TouchableOpacity
          onPress={() => this.props.removeTask(this.props.item.key)}
        >
          <Ionicons
            name="md-trash"
            size={24}
            color="black"
          />
        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 24,
    paddingHorizontal: 16,
  },
});
