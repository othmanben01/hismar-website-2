import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

export const RealisationsSection: React.FC = () => {
  return (
    <PageSection label="05 Réalisations">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>05 — Réalisations</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Nos réalisations par service</span>
            <h2 style={{ marginTop: "16px" }}>Quatre expertises, une même précision</h2>
          </div>
          <div className={`${styles.bodyPad} ${styles.services}`} style={{ marginTop: "38px" }}>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s1"
                defaultLabel="PHOTO — PORTE PIVOT / ENTRÉE"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—01</span>
              <h3>Portes d’entrée sur mesure</h3>
              <p>
                Portes pivot monumentales, portes invisibles flush, intégration architecturale parfaite.
                Précision millimétrique.
              </p>
            </div>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s2"
                defaultLabel="PHOTO — PORTES INTÉRIEURES"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—02</span>
              <h3>Portes intérieures</h3>
              <p>
                Harmonie et cohérence entre chaque espace. Dimensions libres, finitions
                irréprochables.
              </p>
            </div>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s3"
                defaultLabel="PHOTO — PLACARD / DRESSING"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—03</span>
              <h3>Placards &amp; dressings</h3>
              <p>
                Système modulaire haute précision, optimisé pour chaque configuration d’espace.
              </p>
            </div>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s4"
                defaultLabel="PHOTO — CUISINE SUR MESURE"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—04</span>
              <h3>Cuisines sur mesure</h3>
              <p>
                De la conception 3D à l’installation finale. Chaque composant fabriqué dans nos
                ateliers.
              </p>
            </div>
          </div>
          <div className={styles.pageFoot}>
            <span>Villas d’exception</span>
            <span>Casablanca · Dar Bouazza · Bouskoura · Ain Diab</span>
          </div>
        </PageSection>
  );
};
