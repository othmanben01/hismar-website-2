import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot } from "@/components/UI";
import {
  CategoryHeader,
  CategoryFooter,
  CategoryHeroCTAs,
  FeatureHighlight,
  ImageFeaturesGrid,
  SectionDivider,
} from "@/components/UI";

export const Cuisines1Section: React.FC = () => {
  return (
    <PageSection
      theme="night"
      id="cuisines"
      label="05D Cuisines 1/2"
      className={styles.pageHeadNight}
    >
      <CategoryHeader meta="S — 04 · Cuisines sur mesure" />

      <div
        className={styles.bodyPad}
        style={{
          paddingTop: "30px",
          display: "grid",
          gridTemplateColumns: "1fr 252px",
          gap: "36px",
          alignItems: "start",
        }}
      >
        <div>
          <span className="eyebrow">Cuisines sur mesure</span>
          <h2
            style={{
              marginTop: "13px",
              color: "var(--cream)",
              fontSize: "40.8px",
              lineHeight: "1.1",
              maxWidth: "400px",
            }}
          >
            La cuisine qui résiste à tout. Et impressionne pour toujours.
          </h2>
          <p
            style={{
              marginTop: "14px",
              fontFamily: "var(--mono)",
              fontSize: "10.8px",
              letterSpacing: ".22em",
              color: "var(--gold)",
            }}
          >
            5 FAÇADES · 5 PLANS DE TRAVAIL
          </p>
          <p
            style={{
              marginTop: "12px",
              fontSize: "15.6px",
              lineHeight: "1.76",
              color: "rgba(249,248,246,.65)",
              maxWidth: "360px",
            }}
          >
            Caissons en latte bois, façades premium, plans de travail sur mesure. De la
            conception 3D à l’installation finale — entièrement fabriqué dans nos ateliers de
            Casablanca.
          </p>

          <CategoryHeroCTAs />

          <FeatureHighlight
            title="Caissons en latte bois"
            description="Résistance totale aux fuites d’eau. Contrairement au MDF, la latte bois ne
              gonfle pas — vos caissons restent intacts quelle que soit l’humidité."
          />
        </div>
        <ImageSlot
          id="cu-hero"
          defaultLabel="PHOTO — CUISINE RÉALISATION VILLA"
          style={{ width: "100%", height: "360px" }}
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "26px" }}>
        <SectionDivider marginBottom="18px" />
        <span className="eyebrow">5 Plans de travail sur mesure</span>
        <ImageFeaturesGrid
          images={[
            { id: "cu-pt-1", label: "DEKTON", caption: "DEKTON" },
            { id: "cu-pt-2", label: "CÉRAMIQUE", caption: "CÉRAMIQUE" },
            { id: "cu-pt-3", label: "QUARTZ", caption: "QUARTZ" },
            { id: "cu-pt-4", label: "GRANITE", caption: "GRANITE" },
            { id: "cu-pt-5", label: "COMPACT", caption: "COMPACT" },
          ]}
          height="75px"
          fontSize="8.4px"
          letterSpacing=".16em"
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "22px" }}>
        <SectionDivider marginBottom="18px" />
        <span className="eyebrow">5 Façades au choix</span>
        <ImageFeaturesGrid
          images={[
            { id: "cu-fac-1", label: "MDF MÉLAMINÉ", caption: "MDF MÉLAMINÉ" },
            { id: "cu-fac-2", label: "HDF LAQUÉ", caption: "HDF LAQUÉ" },
            { id: "cu-fac-3", label: "VERRE ALU", caption: "VERRE ALU" },
            { id: "cu-fac-4", label: "PLACAGE NAT.", caption: "PLACAGE NAT." },
            { id: "cu-fac-5", label: "ROTIN", caption: "ROTIN" },
          ]}
          height="75px"
          fontSize="8.4px"
          letterSpacing=".16em"
        />
      </div>

      <CategoryFooter title="Cuisines sur mesure — 1 / 2" />
    </PageSection>
  );
};
