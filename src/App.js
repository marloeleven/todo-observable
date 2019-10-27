import React, { useRef, useCallback, useState, useEffect } from "react";
import uuid from "uuid/v4";

import Flex from "components/Flex";
import Form from "components/Form";
import Input from "components/Input";
import Button from "components/Button";
import TodoList from "containers/TodoList";

import Storage from "utils/localStorage";

import styles from "./App.module.css";

const todosStorage = Storage("todos");

function App() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const addTodoHandler = useCallback(() => {
    const value = inputRef.current.value.trim();
    if (value.length) {
      setTodos(todos => [
        ...todos,
        {
          id: uuid(),
          completed: false,
          value
        }
      ]);

      inputRef.current.value = "";
    }
  }, []);

  const clearTodoHandler = useCallback(() => {
    setTodos([]);
  }, []);

  const onSubmit = useCallback(
    event => {
      event.preventDefault();
      addTodoHandler();
    },
    [addTodoHandler]
  );

  useEffect(() => {
    setTodos(todosStorage.get([]));
  }, []);

  useEffect(() => {
    todosStorage.set(todos);
  }, [todos]);

  return (
    <>
      <TodoList todos={todos} />
      <Flex row className={styles.addTodo}>
        <Form onSubmit={onSubmit}>
          <Input ref={inputRef} />
          <Button onClick={addTodoHandler}>Add Todo</Button>
          <Button onClick={clearTodoHandler}>Clear Todo</Button>
        </Form>
      </Flex>
    </>
  );
}

export default App;
