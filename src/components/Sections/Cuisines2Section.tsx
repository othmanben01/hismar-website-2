import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

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
            <div>
              <ImageSlot
                id="cu-panneau"
                defaultLabel="PHOTO — PANNEAU / DÉTAIL FINITION"
                style={{ width: "100%", height: "220px" }}
              />
              <div style={{ marginTop: "16px" }}>
                <span className="eyebrow">Panneaux certifiés européens</span>
                <p style={{ marginTop: "9px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Egger, Alvic and Finsa — les références européennes de la menuiserie haut de
                  gamme. Certifiés normes européennes, densité homogène, stabilité dimensionnelle
                  garantie.
                </p>
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
              </div>
            </div>

            <div>
              <ImageSlot
                id="cu-blum"
                defaultLabel="PHOTO — QUINCAILLERIE BLUM / TIROIR CUISINE"
                style={{ width: "100%", height: "220px" }}
              />
              <div style={{ marginTop: "16px" }}>
                <span className="eyebrow">Protection &amp; quincaillerie</span>
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
              </div>
            </div>
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
            <span>Cuisines sur mesure — 2 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>
  );
};
