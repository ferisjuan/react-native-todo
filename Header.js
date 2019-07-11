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
    const { setText, addTodo, text } = this.props;
    return (
      <View style={styles.container}>
        <Text> Header </Text>
        <TextInput
          placeholder="Escribe una tarea"
          style={styles.texto}
          onChange={setText}
          onSubmitEditing={addTodo}
          value={text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  texto: {
    paddingHorizontal: 16,
    fontSize: 24,
  },
});
