import React, { Component } from 'react';
import
{
  StyleSheet, View, AsyncStorage,
} from 'react-native';

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

  componentDidMount() {
    this.getLocalStorage();
  }

  componentWillUnmount() {
    this.saveToLocalStorage();
  }

  addTodo = () => {
    const { text } = this.state;
    this.setState((prevState) => {
      const updatedTodos = [...prevState.todos, { task: text, key: Date.now().toString() }];
      this.saveToLocalStorage(updatedTodos);
      return {
        todos: updatedTodos,
        text: '',
      };
    });
  }

  removeTask = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.filter(({ key }) => key !== id);
      this.saveToLocalStorage(updatedTodos);
      return { todos: updatedTodos };
    });
  }

  setText = (e) => {
    this.setState({ text: e.nativeEvent.text });
  }

  getLocalStorage = () => {
    AsyncStorage.getItem('@TodoApp:todos')
      .then((data) => {
        if (data) {
          const savedTodos = JSON.parse(data);
          this.setState({
            todos: savedTodos,
          });
        }
      })
      .catch(err => console.log(err));
  }

  saveToLocalStorage = (data) => {
    AsyncStorage.setItem('@TodoApp:todos', JSON.stringify(data))
      .catch(err => console.log(err));
  }


  render() {
    const { text, todos } = this.state;
    return (
      <View style={styles.container}>
        <Header text={text} addTodo={this.addTodo} setText={this.setText} />
        <Body text={text} todos={todos} removeTask={this.removeTask} />
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
