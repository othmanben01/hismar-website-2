import React from "react";
import styles from "@/app/page.module.css";
import { PageSection } from "@/components/UI";
import { RealisationsGallery } from "./RealisationsGallery";
import { Project, Category } from "@/hooks/useRealisations";

interface RealisationsSectionProps {
  initialProjects?: Project[];
  initialCategories?: Category[];
}

export const RealisationsSection: React.FC<RealisationsSectionProps> = ({
  initialProjects = [],
  initialCategories = [],
}) => {
  return (
    <PageSection label="05 Réalisations">
      <div className={styles.pageHead}>
        <span className={styles.logoSm}>HISMAR</span>
        <span className={styles.meta}>05 — Réalisations</span>
      </div>
      <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>

        <h2 style={{ marginTop: "16px" }}>Découvrez nos derniers projets</h2>
      </div>

      <RealisationsGallery
        initialProjects={initialProjects}
        initialCategories={initialCategories}
      />

      <div className={styles.pageFoot}>
        <span>Villas d&apos;exception</span>
        <span>Casablanca · Dar Bouazza · Bouskoura · Ain Diab</span>
      </div>
    </PageSection>
  );
};
