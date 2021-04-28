import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, Touchable, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addtodo';

export default function App() {
  const[todos, setTodos] = useState([
    {text : 'Buy Cofee', key:'1' },
    {text : 'Create an app', key:'2' },
    {text : 'Play on the switch', key:'3' },
  ]);
  const pressHandler= (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text) => {
    if (text.length>3) {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
  
      });
      
    } else {
      Alert.alert('Opps!', 'Todo must be more then 3 Chracters', [{text: 'understood', onPress: () =>console.log('alert closed')}]);
    }
  }
  return (
    <TouchableWithoutFeedback onPress= {()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard');
      }}>

      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content:{
    flex: 1,
    padding: 40,
  },
  list:{ 
    flex:  1,
    marginTop:20,
  }
});
