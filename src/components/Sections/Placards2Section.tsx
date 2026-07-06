import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot } from "@/components/UI";
import {
  FeatureCardWithImage,
  PromoCard,
} from "@/components/UI";

export const Placards2Section: React.FC = () => {
  return (
    <PageSection theme="cream" label="05C Placards 2/2">
      <div className={styles.pageHead}>
        <span className={styles.logoSm}>HISMAR</span>
        <span className={styles.meta}>S — 03 · Placards &amp; dressings</span>
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
          imageId="pl-mdf"
          imageLabel="PHOTO — PANNEAU MDF / COUPE DÉTAIL"
          title="MDF européen certifié"
          description={
            <>
              Panneaux MDF importés d’Europe, certifiés aux normes européennes E1 — qualité and
              durabilité garanties. Densité homogène, aucune déformation dans le temps.
              <div style={{ marginTop: "14px" }}>
                <span className="eyebrow" style={{ fontSize: "9.6px" }}>
                  Bases disponibles
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "9px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>MDF standard</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>Latte</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>Isoplane</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>Bois massif</span>
                  </div>
                </div>
              </div>
            </>
          }
          imageHeight="240px"
        />

        <FeatureCardWithImage
          imageId="pl-blum"
          imageLabel="PHOTO — QUINCAILLERIE BLUM / RAIL DRESSING"
          title="Quincaillerie Blum"
          description="Silencieuse, garantie 20 ans. Glissières, charnières and systèmes de tirage Blum
            — fiabilité prouvée sur des millions de cycles, fermeture douce sur chaque
            mouvement."
          imageHeight="240px"
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "34px" }}>
        <div className="rule-gold" style={{ marginBottom: "22px" }}></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }}>
          <ImageSlot
            id="pl-3d"
            defaultLabel="VISUEL — PLAN 3D DRESSING / CONFIGURATION"
            style={{ width: "100%", height: "160px" }}
          />
          <PromoCard
            highlightLine1="Plans 2D &amp; 3D"
            description="Vous validez chaque détail avant fabrication — zéro surprise à la livraison."
          />
        </div>
      </div>

      <div className={styles.pageFoot}>
        <span>Placards &amp; dressings — 2 / 2</span>
        <span>Manufacture Hismar — Casablanca</span>
      </div>
    </PageSection>
  );
};
