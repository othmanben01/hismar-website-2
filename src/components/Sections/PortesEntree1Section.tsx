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

export const PortesEntree1Section: React.FC = () => {
  return (
    <PageSection
      theme="night"
      id="entree"
      label="05A Portes d'entrée 1/2"
      className={styles.pageHeadNight}
    >
      <CategoryHeader meta="S — 01 · Portes d’entrée" />

      <div
        className={styles.bodyPad}
        style={{
          paddingTop: "32px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "36px",
          alignItems: "start",
        }}
      >
        <div>

          <h2
            style={{
              marginTop: "13px",
              color: "var(--cream)",
              fontSize: "43.2px",
              lineHeight: "1.1",
              maxWidth: "400px",
            }}
          >
            La porte d’entrée qui impressionne. Pour toujours.
          </h2>
          <p
            style={{
              marginTop: "18px",
              fontSize: "15.6px",
              lineHeight: "1.76",
              color: "rgba(249,248,246,.65)",
              maxWidth: "380px",
            }}
          >
            Pivot sol-plafond, sans jointure. Traitement triple protection à l’italienne.
            Quincaillerie allemande garantie 10 ans. Hismar — Casablanca depuis 1968.
          </p>

          <CategoryHeroCTAs />

          <FeatureHighlight
            title="Porte pivot sol-plafond"
            description="Du sol au plafond, sans jointure. Un seul plan continu qui efface la limite entre
              architecture et menuiserie — une présence monumentale dès l’entrée."
          />
        </div>
        <ImageSlot
          id="pe-hero"
          defaultLabel="PHOTO — PORTE PIVOT SOL-PLAFOND"
          style={{ width: "100%", height: "58vh", minHeight: "420px" }}
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
        <SectionDivider />
        <TextFeaturesGrid
          features={[
            {
              title: "Finition bois massif",
              description: "Essence naturelle sélectionnée, veinure visible, texture d’exception.",
            },
            {
              title: "HPL compact",
              description:
                "Résistance extrême aux chocs et aux UV. Décors modernes, finitions mate ou satinée.",
            },
            {
              title: "Composite",
              description:
                "Légèreté et durabilité. Idéal pour les grandes dimensions et les formats pivots.",
            },
          ]}
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "22px" }}>
        <ImageFeaturesGrid
          images={[
            { id: "pe-fin-1", label: "FINITION BOIS MASSIF", caption: "BOIS MASSIF" },
            { id: "pe-fin-2", label: "FINITION HPL COMPACT", caption: "HPL COMPACT" },
            { id: "pe-fin-3", label: "FINITION COMPOSITE", caption: "COMPOSITE" },
          ]}
          height="130px"
        />
      </div>

      <CategoryFooter title="Portes d’entrée — 1 / 2" />
    </PageSection>
  );
};
