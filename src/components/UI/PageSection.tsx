import React from "react";
import styles from "./PageSection.module.css";

interface PageSectionProps {
  id?: string;
  theme?: "night" | "cream" | "white";
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PageSection: React.FC<PageSectionProps> = ({
  id,
  theme = "white",
  label,
  className = "",
  children,
}) => {
  const themeClass =
    theme === "night"
      ? styles.night
      : theme === "cream"
      ? styles.cream
      : styles.white;

  return (
    <section
      id={id}
      data-screen-label={label}
      className={`page ${styles.page} ${themeClass} ${className}`}
    >
      {children}
    </section>
  );
};
