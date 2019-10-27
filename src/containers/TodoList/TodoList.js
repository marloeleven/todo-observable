import React from "react";
import cx from "classnames";

import Todo from "components/Todo";

import styles from "./TodoList.module.css";

const renderTodos = todos =>
  todos.map(todo => <Todo todo={todo.id} {...todo} />);

export default ({ todos }) => {
  return <ul className={cx(styles.todoList)}>{renderTodos(todos)}</ul>;
};
