import React, { Component } from 'react';
import
{
  StyleSheet, View, Text, TextInput,
} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
          placeholder="Escribe una tarea"
          style={styles.texto}
          onChange={this.props.setText}
          onSubmitEditing={this.props.addTodo}
          value={this.props.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#aaa',
    justifyContent: 'center',
  },
  texto: {
    paddingHorizontal: 16,
  },
});
