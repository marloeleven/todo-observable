import React from "react";
import cx from "classnames";

import styles from "./Flex.module.css";

export default ({ children, className, row, ...props }) => (
  <div className={cx(styles.flex, { [styles.row]: row })} {...props}>
    {children}
  </div>
);
