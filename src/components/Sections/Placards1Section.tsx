import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot } from "@/components/UI";
import {
  CategoryHeader,
  CategoryFooter,
  CategoryHeroCTAs,
  FeatureHighlight,
  TextFeaturesGrid,
  ImageFeaturesGrid,
  SectionDivider,
} from "@/components/UI";

export const Placards1Section: React.FC = () => {
  return (
    <PageSection
      theme="night"
      id="placards"
      label="05C Placards 1/2"
      className={styles.pageHeadNight}
    >
      <CategoryHeader meta="S — 03 · Placards &amp; dressings" />

      <div
        className={styles.bodyPad}
        style={{
          paddingTop: "32px",
          display: "grid",
          gridTemplateColumns: "1fr 252px",
          gap: "36px",
          alignItems: "start",
        }}
      >
        <div>
          <span className="eyebrow">Placards &amp; dressings sur mesure</span>
          <h2
            style={{
              marginTop: "13px",
              color: "var(--cream)",
              fontSize: "40.8px",
              lineHeight: "1.1",
              maxWidth: "420px",
            }}
          >
            Placards sur mesure — 5 façades, 8 configurations, zéro compromis.
          </h2>
          <p
            style={{
              marginTop: "16px",
              fontSize: "15.6px",
              lineHeight: "1.76",
              color: "rgba(249,248,246,.65)",
              maxWidth: "370px",
            }}
          >
            MDF européen certifié, quincaillerie Blum garantie 20 ans, traitement exclusif
            anti-humidité Hismar. Machines SCM italiennes — précision millimétrique.
          </p>

          <CategoryHeroCTAs />

          <FeatureHighlight
            title="Effet habillage mural"
            description="Portes intégrées avec panneau sol-plafond — zéro cadre visible. Le placard
              disparaît dans l’architecture. Il ne reste que la surface, le grain et la ligne."
          />
        </div>
        <ImageSlot
          id="pl-hero"
          defaultLabel="PHOTO — PLACARD EFFET MURAL SOL-PLAFOND"
          style={{ width: "100%", height: "360px" }}
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
        <SectionDivider marginBottom="20px" />
        <span className="eyebrow">5 Façades au choix</span>
        <ImageFeaturesGrid
          images={[
            { id: "pl-fac-1", label: "MDF MÉLAMINÉ", caption: "MDF MÉLAMINÉ" },
            { id: "pl-fac-2", label: "HDF LAQUÉ", caption: "HDF LAQUÉ" },
            { id: "pl-fac-3", label: "VERRE ALUMINIUM", caption: "VERRE ALU" },
            { id: "pl-fac-4", label: "PLACAGE NATUREL", caption: "PLACAGE NAT." },
            { id: "pl-fac-5", label: "ROTIN", caption: "ROTIN" },
          ]}
          height="80px"
          fontSize="8.4px"
          letterSpacing=".18em"
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "28px" }}>
        <SectionDivider marginBottom="20px" />
        <TextFeaturesGrid
          features={[
            {
              title: "Traitement anti-humidité exclusif",
              description:
                "Socle bois sapin traité, bords MDF avec profilé PVC, traitement exclusif Hismar — protection totale contre l’eau. Idéal pour dressings, salles de bain and espaces humides.",
            },
            {
              title: "Machines SCM italiennes",
              description:
                "Scie panneau and robot bande de chant SCM, Italie — précision millimétrique sur chaque pièce. Répétabilité industrielle, finitions irréprochables.",
            },
          ]}
        />
      </div>

      <CategoryFooter title="Placards &amp; dressings — 1 / 2" />
    </PageSection>
  );
};
