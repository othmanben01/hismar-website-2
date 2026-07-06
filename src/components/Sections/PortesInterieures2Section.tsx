import React from "react";
import styles from "@/app/page.module.css";
import { PageSection } from "@/components/UI";
import {
  FeatureCardWithImage,
  PartnerBrands,
  CertificationBlock,
} from "@/components/UI";

export const PortesInterieures2Section: React.FC = () => {
  return (
    <PageSection theme="cream" label="05B Portes intérieures 2/2">
      <div className={styles.pageHead}>
        <span className={styles.logoSm}>HISMAR</span>
        <span className={styles.meta}>S — 02 · Portes intérieures</span>
      </div>

      <div
        className={styles.bodyPad}
        style={{
          paddingTop: "42px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "36px",
          alignItems: "start",
        }}
      >
        <FeatureCardWithImage
          imageId="pi-placage"
          imageLabel="PHOTO — DÉTAIL PLACAGE / VEINE BOIS"
          title={
            <>
              Placage 1<sup>er</sup> choix
            </>
          }
          description="Feuilles de placage sélectionnées parmi les meilleures au monde. Symétrie des
            veines, continuité du grain, épaisseur et densité contrôlées — la signature
            visuelle de chaque porte."
          imageHeight="260px"
        />
        <FeatureCardWithImage
          imageId="pi-humidite"
          imageLabel="PHOTO — PORTE SUR MESURE VUE PROFIL"
          title="100% bois naturel"
          description="Portes résistantes à l’humidité, fabriquées en bois massif naturel. Aucune
            déformation dans le temps — même en salle de bain ou en couloir exposé."
          imageHeight="260px"
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "40px" }}>
        <div className="rule-gold" style={{ marginBottom: "24px" }}></div>
        <PartnerBrands
          brands={[
            { id: "pi-brand-1", label: "LOGO MARQUE QUINCAILLERIE 1" },
            { id: "pi-brand-2", label: "LOGO MARQUE QUINCAILLERIE 2" },
            { id: "pi-brand-3", label: "LOGO MARQUE QUINCAILLERIE 3" },
          ]}
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "32px" }}>
        <div className="rule-gold" style={{ marginBottom: "24px" }}></div>
        <CertificationBlock
          imageId="pi-fsc"
          imageLabel="LOGO FSC"
          title="Certification FSC"
          description={
            <>
              Nos matières premières bois proviennent de forêts gérées durablement, certifiées{" "}
              <strong style={{ fontWeight: 400, color: "var(--night)" }}>FSC</strong> (Forest
              Stewardship Council). Un engagement environnemental concret, traçable à chaque
              livraison.
            </>
          }
        />
      </div>

      <div className={styles.pageFoot}>
        <span>Portes intérieures — 2 / 2</span>
        <span>Manufacture Hismar — Casablanca</span>
      </div>
    </PageSection>
  );
};
