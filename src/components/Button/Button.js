import React from "react";
import cx from "classnames";

import styles from "./Button.module.css";

export default ({ children, className, onClick, ...props }) => {
  return (
    <button
      className={cx(styles.button, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
