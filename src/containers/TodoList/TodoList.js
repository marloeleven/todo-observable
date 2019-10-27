import React from "react";
import cx from "classnames";

import Todo from "components/Todo";

import styles from "./TodoList.module.css";

const renderTodos = todos =>
  todos.map(todo => (
    <Todo key={todo.id} todo={todo.id} {...todo}>
      {todo.value}
    </Todo>
  ));

export default ({ todos, ...props }) => {
  return <ul className={cx(styles.todoList)}>{renderTodos(todos)}</ul>;
};
