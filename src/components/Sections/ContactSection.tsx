import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

export const ContactSection: React.FC = () => {
  return (
    <PageSection theme="night" id="contact" label="08 Contact" className={styles.pageHeadNight}>
          <div className={styles.pageHead} style={{ paddingTop: "44px" }}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>08 — Contact &amp; Devis</span>
          </div>
          <div className={styles.contactCenter}>
            <h2>Concevons ensemble votre projet</h2>
            <p className={styles.lede}>
              Rencontrez nos techniciens dans nos ateliers de Casablanca ou demandez une étude
              gratuite à partir de vos plans.
            </p>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "48px" }}>
            <ContactForm />
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.cell}>
              <div className={styles.lab}>Atelier &amp; Bureau</div>
              <div className={styles.val}>48 Rue 10, Bd du Fouarat, Casablanca 20020</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.lab}>Téléphone / WhatsApp</div>
              <div className={styles.val}>+212 662 177 069</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.lab}>Courriel</div>
              <div className={styles.val}>othmanben.vp@gmail.com</div>
            </div>
            <div className={styles.cell}>
              <div className={styles.lab}>Instagram</div>
              <div className={styles.val}>@hismarmenuiserie.ma</div>
            </div>
          </div>

          <div className={styles.ctaWrap}>
            <a className={styles.cta} href="mailto:contact@hismarmenuiserie.ma">
              Nous écrire par courriel
            </a>
          </div>

          <div className={styles.contactFoot}>
            <div className="mono" style={{ color: "rgba(249,248,246,.3)", marginBottom: "8px" }}>
              HISMAR — EST. 1968
            </div>
            <div
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "15.6px",
                color: "rgba(249,248,246,.35)",
              }}
            >
              1968. Le bois élevé au rang d’art.
            </div>
          </div>
        </PageSection>
  );
};
