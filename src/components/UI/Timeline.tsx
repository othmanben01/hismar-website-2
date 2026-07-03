import React from "react";
import styles from "./Timeline.module.css";

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ steps, className = "" }) => {
  return (
    <div className={`${styles.timeline} ${className}`}>
      <div className={styles.track}></div>
      <div className={styles.steps}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div className={styles.dot}>{step.number}</div>
            <h4 className={styles.title}>{step.title}</h4>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
