import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    title: "Consultation & écoute",
    description: "Vos besoins, vos plans, votre calendrier.",
  },
  {
    number: 2,
    title: "Devis détaillé sous 48 h",
    description: "Transparent, poste par poste.",
  },
  {
    number: 3,
    title: "Conception 2D & 3D offerte",
    description: "Visualisez chaque pièce avant fabrication.",
  },
  {
    number: 4,
    title: "Fabrication de précision",
    description: "En atelier, sur machines industrielles.",
  },
  {
    number: 5,
    title: "Pose & Réception",
    description: "Par nos équipes qualifiées.",
  },
];

export const ProcessusSection: React.FC = () => {
  return (
    <PageSection theme="cream" id="processus" label="06 Processus">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>06 — Notre processus</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>

            <h2 style={{ marginTop: "16px", maxWidth: "540px" }}>
              De votre vision à la réalisation
            </h2>
            <p className="lede" style={{ marginTop: "18px", maxWidth: "520px" }}>
              Un processus de production maîtrisé de bout en bout, dans nos ateliers de Casablanca.
            </p>
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "52px" }}>
            <Timeline steps={TIMELINE_STEPS} />
            <div className={styles.processNote} style={{ marginTop: "50px", textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "19.2px",
                  color: "var(--gold)",
                }}
              >
                Le bois élevé au rang d’art depuis 1968.
              </span>
            </div>
          </div>
          <div className={styles.pageFoot}>
            <span>Processus certifié</span>
            <span>Accompagnement de A à Z</span>
          </div>
        </PageSection>
  );
};
