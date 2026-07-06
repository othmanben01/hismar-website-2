import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

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
            <div>
              <ImageSlot
                id="pe-traitement"
                defaultLabel="PHOTO — DÉTAIL FINITION / TEXTURE EXTÉRIEURE"
                style={{ width: "100%", height: "240px" }}
              />
              <div style={{ marginTop: "18px" }}>
                <span className="eyebrow">Triple protection à l’italienne</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Traitement insecticide, anti-UV and anti-intempéries — fond et vernis italiens
                  appliqués en atelier. La porte conserve sa teinte et sa structure intactes, saison
                  après saison. Fabriquée pour durer une vie.
                </p>
              </div>
            </div>
            <div>
              <ImageSlot
                id="pe-acier"
                defaultLabel="PHOTO — ARMATURE ACIER / COUPE TECHNIQUE"
                style={{ width: "100%", height: "240px" }}
              />
              <div style={{ marginTop: "18px" }}>
                <span className="eyebrow">PROFILE ACIER INTERIEURE</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Un profilé en acier en L, incrusté avec précision dans l'encadrement en bois
                  rouge. Une armature invisible qui garantit une stabilité absolue contre le
                  gauchissement.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "34px" }}>
            <div className="rule-gold" style={{ marginBottom: "22px" }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }}>
              <div>
                <span className="eyebrow">Quincaillerie allemande</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Pivots, paumelles et systèmes de fermeture anti-corrosion, garantie 10 ans
                  fabricant. Mécanismes éprouvés sur des millions de cycles — fiabilité totale sur
                  la durée.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>
                      Anti-corrosion — traitement inox ou laiton massif
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>Garantie 10 ans fabricant incluse</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>
                      Certifiée pour les formats pivots grande dimension
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ border: "1px solid var(--gold)", padding: "28px 24px", textAlign: "center" }}>
                <span className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
                  Commencez votre projet
                </span>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "33.6px",
                    color: "var(--night)",
                    lineHeight: "1.2",
                    marginBottom: "16px",
                  }}
                >
                  Plans 3D
                  <br />
                  <span style={{ fontStyle: "italic", color: "var(--gold)" }}>gratuits</span>
                </div>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }}></div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "21.6px", color: "var(--night)" }}>
                  Devis sous <span style={{ color: "var(--gold)" }}>48h</span>
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14.4px",
                    color: "var(--ink-light)",
                    lineHeight: "1.6",
                  }}
                >
                  Notre équipe vous contacte rapidement pour organiser une consultation et une étude
                  personnalisée.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pageFoot}>
            <span>Portes d’entrée — 2 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>
  );
};
