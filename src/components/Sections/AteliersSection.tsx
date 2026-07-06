import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

export const AteliersSection: React.FC = () => {
  return (
    <PageSection id="ateliers" label="03 Ateliers et technologie">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>03 — Ateliers &amp; technologie</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Nos ateliers &amp; technologie</span>
            <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
              La précision industrielle au service de votre villa
            </h2>
          </div>
          <div
            className={styles.bodyPad}
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "36px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="lede">
                Hismar dispose d’ateliers industriels haute performance équipés de machines de
                dernière génération. Chaque pièce y est fabriquée avec une précision millimétrique
                impossible à atteindre manuellement.
              </p>
              <div className={styles.machines} style={{ marginTop: "26px" }}>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—01</span>
                  <span className={styles.mname}>Presse hydraulique</span>
                </div>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—02</span>
                  <span className={styles.mname}>Scie à panneaux de précision millimétrique</span>
                </div>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—03</span>
                  <span className={styles.mname}>Bande de chant automatique</span>
                </div>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—04</span>
                  <span className={styles.mname}>
                    Placage de précision <em>machines italiennes</em>
                  </span>
                </div>
              </div>
            </div>
            <ImageSlot
              id="p3-machine"
              defaultLabel="PHOTO — MACHINE / ATELIER"
              style={{ width: "100%", height: "58vh", minHeight: "420px" }}
            />
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "38px" }}>
            <Goldbox
              mark="m²"
              title="1000 m² d’ateliers industriels à Casablanca"
              subtitle="Un processus de production intégré, de la découpe numérique au contrôle qualité final."
            />
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "36px", display: "flex", justifyContent: "center" }}>
            <ImageSlot
              id="p3-atelier"
              defaultLabel="PHOTO — VUE D'ENSEMBLE DES ATELIERS"
              style={{ width: "70%", height: "240px" }}
            />
          </div>
          <div className={styles.pageFoot}>
            <span>Engineering du bois</span>
            <span>Précision millimétrique</span>
          </div>
        </PageSection>
  );
};
