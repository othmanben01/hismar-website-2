import React from "react";
import styles from "./Goldbox.module.css";

interface GoldboxProps {
  mark: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const Goldbox: React.FC<GoldboxProps> = ({
  mark,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`goldbox ${styles.goldbox} ${className}`}>
      <div className={styles.mark}>{mark}</div>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
      </div>
    </div>
  );
};
