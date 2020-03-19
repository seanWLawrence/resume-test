import React, { FC, ReactNode, memo } from "react";

import styles from "./Card.module.sass";

interface CardProps {
  children: ReactNode;
}

let Card: FC<CardProps> = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
};

export default memo(Card);
