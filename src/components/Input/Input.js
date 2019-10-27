import React, { forwardRef } from "react";
import cx from "classnames";

import styles from "./Input.module.css";

export default forwardRef(
  ({ type = "text", defaultValue = "", className, onClick, ...props }, ref) => (
    <input
      type={type}
      defaultValue={defaultValue}
      className={cx(styles.input, className)}
      {...props}
    />
  )
);
