import React, { useRef, useCallback, useState } from "react";

import Flex from "components/Flex";
import Input from "components/Input";
import Button from "components/Button";
import TodoList from "containers/TodoList";

function App() {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);

  const addTodoHandler = useCallback(() => {});

  return (
    <>
      <TodoList todos={todos} />;
      <Flex row>
        <Input ref={inputRef} />
        <Button onClick={addTodoHandler}>Add Todo</Button>
      </Flex>
    </>
  );
}

export default App;
