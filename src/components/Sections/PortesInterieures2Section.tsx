import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

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
            <div>
              <ImageSlot
                id="pi-placage"
                defaultLabel="PHOTO — DÉTAIL PLACAGE / VEINE BOIS"
                style={{ width: "100%", height: "260px" }}
              />
              <div style={{ marginTop: "20px" }}>
                <span className="eyebrow">
                  Placage 1<sup>er</sup> choix
                </span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Feuilles de placage sélectionnées parmi les meilleures au monde. Symétrie des
                  veines, continuité du grain, épaisseur et densité contrôlées — la signature
                  visuelle de chaque porte.
                </p>
              </div>
            </div>
            <div>
              <ImageSlot
                id="pi-humidite"
                defaultLabel="PHOTO — PORTE SUR MESURE VUE PROFIL"
                style={{ width: "100%", height: "260px" }}
              />
              <div style={{ marginTop: "20px" }}>
                <span className="eyebrow">100% bois naturel</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Portes résistantes à l’humidité, fabriquées en bois massif naturel. Aucune
                  déformation dans le temps — même en salle de bain ou en couloir exposé.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "40px" }}>
            <div className="rule-gold" style={{ marginBottom: "24px" }}></div>
            <span className="eyebrow">Quincailleries partenaires</span>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginTop: "16px" }}>
              <ImageSlot
                id="pi-brand-1"
                defaultLabel="LOGO MARQUE QUINCAILLERIE 1"
                style={{ width: "100%", height: "100px", background: "#F3EFE9" }}
              />
              <ImageSlot
                id="pi-brand-2"
                defaultLabel="LOGO MARQUE QUINCAILLERIE 2"
                style={{ width: "100%", height: "100px", background: "#F3EFE9" }}
              />
              <ImageSlot
                id="pi-brand-3"
                defaultLabel="LOGO MARQUE QUINCAILLERIE 3"
                style={{ width: "100%", height: "100px", background: "#F3EFE9" }}
              />
            </div>
            <p
              style={{
                marginTop: "12px",
                fontSize: "13.8px",
                color: "var(--ink-light)",
                fontFamily: "var(--serif)",
                fontStyle: "italic",
              }}
            >
              Mécanismes éprouvés sur des millions de cycles — garantie fabricant incluse.
            </p>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "32px" }}>
            <div className="rule-gold" style={{ marginBottom: "24px" }}></div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "130px 1fr",
                gap: "28px",
                alignItems: "center",
              }}
            >
              <ImageSlot
                id="pi-fsc"
                defaultLabel="LOGO FSC"
                style={{ width: "100%", height: "120px", background: "#F3EFE9" }}
              />
              <div>
                <span className="eyebrow">Certification FSC</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.72" }}>
                  Nos matières premières bois proviennent de forêts gérées durablement, certifiées{" "}
                  <strong style={{ fontWeight: 400, color: "var(--night)" }}>FSC</strong> (Forest
                  Stewardship Council). Un engagement environnemental concret, traçable à chaque
                  livraison.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pageFoot}>
            <span>Portes intérieures — 2 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>
  );
};
