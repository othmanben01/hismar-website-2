import React from "react";
import styles from "@/app/page.module.css";
import { PageSection } from "@/components/UI";
import {
  FeatureCardWithImage,
  TextFeaturesGrid,
  PromoCard,
} from "@/components/UI";

export const PortesEntree2Section: React.FC = () => {
  return (
    <PageSection theme="cream" label="05A Portes d'entrée 2/2">
      <div className={styles.pageHead}>
        <span className={styles.logoSm}>HISMAR</span>
        <span className={styles.meta}>S — 01 · Portes d’entrée</span>
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
          imageId="pe-traitement"
          imageLabel="PHOTO — DÉTAIL FINITION / TEXTURE EXTÉRIEURE"
          title="Triple protection à l’italienne"
          description="Traitement insecticide, anti-UV and anti-intempéries — fond et vernis italiens
            appliqués en atelier. La porte conserve sa teinte et sa structure intactes, saison
            après saison. Fabriquée pour durer une vie."
        />
        <FeatureCardWithImage
          imageId="pe-acier"
          imageLabel="PHOTO — ARMATURE ACIER / COUPE TECHNIQUE"
          title="PROFILE ACIER INTERIEURE"
          description="Un profilé en acier en L, incrusté avec précision dans l'encadrement en bois
            rouge. Une armature invisible qui garantit une stabilité absolue contre le
            gauchissement."
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "34px" }}>
        <div className="rule-gold" style={{ marginBottom: "22px" }}></div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "36px",
            alignItems: "center",
          }}
        >
          <TextFeaturesGrid
            features={[
              {
                title: "Quincaillerie allemande",
                description:
                  "Pivots, paumelles et systèmes de fermeture anti-corrosion, garantie 10 ans fabricant. Mécanismes éprouvés sur des millions de cycles — fiabilité totale sur la durée.",
                list: [
                  "Anti-corrosion — traitement inox ou laiton massif",
                  "Garantie 10 ans fabricant incluse",
                  "Certifiée pour les formats pivots grande dimension",
                ],
              },
            ]}
          />
          <PromoCard />
        </div>
      </div>

      <div className={styles.pageFoot}>
        <span>Portes d’entrée — 2 / 2</span>
        <span>Manufacture Hismar — Casablanca</span>
      </div>
    </PageSection>
  );
};
