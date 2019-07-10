import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import Body from './Body';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      text: '',
    };
  }

  addTodo = (e) => {
    const { text } = e.nativeEvent;
    this.setState(prevState => ({
      todos: [...prevState.todos, text],
      text: '',
    }));
  }

  setText = (e) => {
    this.setState({ text: e.nativeEvent.text });
  }

  render() {
    const { text, todos } = this.state;
    return (
      <View style={styles.container}>
        <Header text={text} addTodo={this.addTodo} setText={this.setText} />
        <Text>{todos}</Text>
        <Body text={text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
