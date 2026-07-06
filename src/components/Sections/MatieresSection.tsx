import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

export const MatieresSection: React.FC = () => {
  return (
    <PageSection theme="cream" id="matieres" label="04 Matières premières">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>04 — Matières premières</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Nos matières premières</span>
            <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
              Des matériaux certifiés, importés d’Europe
            </h2>
            <p className="lede" style={{ marginTop: "20px", maxWidth: "540px" }}>
              Chaque projet commence par l’excellence des matières premières. Nos panneaux MDF sont
              importés d’Europe, conformes à la norme E1.
            </p>
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "34px" }}>
            <Goldbox
              mark="E1"
              title="Certificats de conformité disponibles sur demande"
              subtitle="La transparence au cœur de nos engagements : les certificats de conformité de nos fabricants européens sont consultables à tout moment."
            />
          </div>
          <div className={`${styles.bodyPad} ${styles.hwGrid}`} style={{ marginTop: "46px" }}>
            <div>
              <span className="eyebrow">Quincaillerie</span>
              <div className={styles.hwBrand}>
                Blum &amp; Hettich
                <br />
                <span style={{ fontSize: "18px", fontStyle: "italic", color: "var(--ink-light)" }}>
                  référence mondiale
                </span>
              </div>
            </div>
            <ul className={styles.hwList}>
              <li>Fermetures silencieuses sur l’ensemble des ouvrants</li>
              <li>Garantie 10 ans sur la quincaillerie</li>
              <li>Mécanismes éprouvés sur des millions de cycles</li>
            </ul>
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "48px" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: "14px" }}>
              Certificats &amp; labels
            </span>
            <div className={styles.certSlots}>
              <ImageSlot
                id="p4-cert-1"
                defaultLabel="LOGO CERTIFICAT"
                style={{ width: "100%", height: "130px" }}
              />
              <ImageSlot
                id="p4-cert-2"
                defaultLabel="LOGO CERTIFICAT"
                style={{ width: "100%", height: "130px" }}
              />
              <ImageSlot
                id="p4-cert-3"
                defaultLabel="LOGO CERTIFICAT"
                style={{ width: "100%", height: "130px" }}
              />
            </div>
          </div>
          <div className={styles.pageFoot}>
            <span>Matériaux certifiés E1</span>
            <span>Importés d’Europe</span>
          </div>
        </PageSection>
  );
};
