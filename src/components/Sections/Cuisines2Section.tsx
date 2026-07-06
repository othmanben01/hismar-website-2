import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot } from "@/components/UI";
import {
  FeatureCardWithImage,
  PromoCard,
  TextFeaturesGrid,
} from "@/components/UI";

export const Cuisines2Section: React.FC = () => {
  return (
    <PageSection theme="cream" label="05D Cuisines 2/2">
      <div className={styles.pageHead}>
        <span className={styles.logoSm}>HISMAR</span>
        <span className={styles.meta}>S — 04 · Cuisines sur mesure</span>
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
          imageId="cu-panneau"
          imageLabel="PHOTO — PANNEAU / DÉTAIL FINITION"
          title="Panneaux certifiés européens"
          description={
            <>
              Egger, Alvic and Finsa — les références européennes de la menuiserie haut de
              gamme. Certifiés normes européennes, densité homogène, stabilité dimensionnelle
              garantie.
              <div style={{ marginTop: "13px" }}>
                <span className="eyebrow" style={{ fontSize: "9.6px" }}>
                  3 niveaux de finition
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "9px" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>MDF gloss</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>MDF high gloss</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>MDF extra matt</span>
                  </div>
                </div>
              </div>
            </>
          }
          imageHeight="220px"
        />

        <FeatureCardWithImage
          imageId="cu-blum"
          imageLabel="PHOTO — QUINCAILLERIE BLUM / TIROIR CUISINE"
          title="Protection &amp; quincaillerie"
          description={
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "9px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "15px" }}>
                  Quincaillerie Blum — silencieuse, garantie 20 ans
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "15px" }}>Socle bois sapin traité contre l’eau</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "15px" }}>Bords MDF avec profilé PVC</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                <span style={{ fontSize: "15px" }}>
                  Traitement exclusif Hismar anti-humidité
                </span>
              </div>
            </div>
          }
          imageHeight="220px"
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
        <div className="rule-gold" style={{ marginBottom: "22px" }}></div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }}>
          <div>
            <span className="eyebrow">Machines SCM italiennes</span>
            <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
              Scie panneau and robot bande de chant SCM, Italie — précision millimétrique sur
              chaque pièce. Placages and chants collés à très haute chaleur and pression :
              liaison permanente, zéro décollement.
            </p>
            <ImageSlot
              id="cu-scm"
              defaultLabel="PHOTO — MACHINE SCM / ATELIER"
              style={{ width: "100%", height: "110px", marginTop: "14px" }}
            />
          </div>
          <PromoCard
            highlightLine1="Plans 2D &amp; 3D"
            description="Vous validez chaque détail avant fabrication — zéro surprise à la livraison."
          />
        </div>
      </div>

      <div className={styles.pageFoot}>
        <span>Cuisines sur mesure — 2 / 2</span>
        <span>Manufacture Hismar — Casablanca</span>
      </div>
    </PageSection>
  );
};
