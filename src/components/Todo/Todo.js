import React from 'react';
import cx from 'classnames';

import styles from './Todo.module.css';

export default ({ completed, className, children, ...props }) => {
  return (
    <label className={cx(styles.todo, className)} {...props}>
      <input
        type='checkbox'
        checked={completed}
        onChange={e => console.warn(e.target.checked)}
      />
      {children}
    </label>
  );
};
