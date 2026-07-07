import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot } from "@/components/UI";

export const PourquoiSection: React.FC = () => {
  return (
    <PageSection theme="cream" id="pourquoi" label="02 Pourquoi Hismar">
      <div className={styles.pageHead}>
        <span className={styles.logoSm}>HISMAR</span>
        <span className={styles.meta}>02 — Pourquoi Hismar</span>
      </div>
      <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>

        <h2 style={{ marginTop: "16px", maxWidth: "540px" }}>
          58 ans d’excellence industrielle
        </h2>
        <p className="lede" style={{ marginTop: "20px", maxWidth: "520px" }}>
          Depuis 1968, Hismar conçoit et fabrique la menuiserie des villas les plus exigeantes de
          Casablanca. Trois piliers fondent cette exigence.
        </p>
      </div>
      <div className={`${styles.bodyPad} ${styles.pillars}`} style={{ marginTop: "48px" }}>
        <div className={styles.pillar}>
          <span className={styles.pnum}>01</span>
          <h3>Héritage &amp; expertise depuis 1968</h3>
          <p>
            Près de six décennies d’engineering du bois au service de projets résidentiels
            d’exception.
          </p>
        </div>
        <div className={styles.pillar}>
          <span className={styles.pnum}>02</span>
          <h3>Ateliers industriels 1000&nbsp;m²</h3>
          <p>
            Machines de précision de dernière génération, pour une fabrication d’une régularité
            millimétrique.
          </p>
        </div>
        <div className={styles.pillar}>
          <span className={styles.pnum}>03</span>
          <h3>Matières premières européennes certifiées</h3>
          <p>Panneaux importés d’Europe, certifiés E1 — la traçabilité comme standard.</p>
        </div>
      </div>
      <div className={styles.bodyPad} style={{ marginTop: "52px" }}>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.n}>58</div>
            <div className={styles.l}>Ans d’expérience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.n}>+500</div>
            <div className={styles.l}>Villas réalisées</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.n}>1000&nbsp;m²</div>
            <div className={styles.l}>Ateliers industriels</div>
          </div>
        </div>
      </div>
      <div className={styles.bodyPad} style={{ marginTop: "44px" }}>
        <ImageSlot
          id="p2-photo"
          defaultLabel="PHOTO — RÉALISATION INTÉRIEUR VILLA"
          style={{ width: "100%", height: "380px" }}
          objectFit="contain"
        />
      </div>
      <div className={styles.pageFoot}>
        <span>Hismar — Manufacture sur mesure</span>
        <span>Casablanca</span>
      </div>
    </PageSection>
  );
};
