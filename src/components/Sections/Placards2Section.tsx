import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

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
            <div>
              <ImageSlot
                id="pl-mdf"
                defaultLabel="PHOTO — PANNEAU MDF / COUPE DÉTAIL"
                style={{ width: "100%", height: "240px" }}
              />
              <div style={{ marginTop: "18px" }}>
                <span className="eyebrow">MDF européen certifié</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Panneaux MDF importés d’Europe, certifiés aux normes européennes E1 — qualité and
                  durabilité garanties. Densité homogène, aucune déformation dans le temps.
                </p>
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
              </div>
            </div>

            <div>
              <ImageSlot
                id="pl-blum"
                defaultLabel="PHOTO — QUINCAILLERIE BLUM / RAIL DRESSING"
                style={{ width: "100%", height: "240px" }}
              />
              <div style={{ marginTop: "18px" }}>
                <span className="eyebrow">Quincaillerie Blum</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Silencieuse, garantie 20 ans. Glissières, charnières and systèmes de tirage Blum
                  — fiabilité prouvée sur des millions de cycles, fermeture douce sur chaque
                  mouvement.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "34px" }}>
            <div className="rule-gold" style={{ marginBottom: "22px" }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }}>
              <ImageSlot
                id="pl-3d"
                defaultLabel="VISUEL — PLAN 3D DRESSING / CONFIGURATION"
                style={{ width: "100%", height: "160px" }}
              />
              <div style={{ border: "1px solid var(--gold)", padding: "26px 22px", textAlign: "center" }}>
                <span className="eyebrow" style={{ display: "block", marginBottom: "14px" }}>
                  Commencez votre projet
                </span>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "31.2px",
                    color: "var(--night)",
                    lineHeight: "1.2",
                    marginBottom: "14px",
                  }}
                >
                  Plans 2D &amp; 3D
                  <br />
                  <span style={{ fontStyle: "italic", color: "var(--gold)" }}>gratuits</span>
                </div>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "14px" }}></div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "19.2px", color: "var(--night)" }}>
                  Devis sous <span style={{ color: "var(--gold)" }}>48h</span>
                </div>
                <p
                  style={{
                    marginTop: "9px",
                    fontSize: "13.8px",
                    color: "var(--ink-light)",
                    lineHeight: "1.6",
                  }}
                >
                  Vous validez chaque détail avant fabrication — zéro surprise à la livraison.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pageFoot}>
            <span>Placards &amp; dressings — 2 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>
  );
};
