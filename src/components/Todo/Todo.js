import React from "react";
import cx from "classnames";

import styles from "./Todo.module.css";

export default ({ checked, className, children, ...props }) => {
  return (
    <label className={cx(styles.todo, className)} {...props}>
      <input type="checkbox" checked={checked} />
      {children}
    </label>
  );
};
