import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

export const CertificationsSection: React.FC = () => {
  return (
    <PageSection id="certifications" label="07 Certifications">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>07 — Engagements &amp; Garanties</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>

            <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
              Une fabrication responsable, des garanties claires
            </h2>
          </div>
          <div className={`${styles.bodyPad} ${styles.certs}`} style={{ marginTop: "44px" }}>
            <div className={styles.cert}>
              <div className={styles.certCheck}>✓</div>
              <div>
                <h3>Norme Européenne E1</h3>
                <p>
                  Taux d'émission de formaldéhyde le plus bas du marché, garantissant la qualité de
                  l'air intérieur de votre villa.
                </p>
              </div>
            </div>
            <div className={styles.cert}>
              <div className={styles.certCheck}>✓</div>
              <div>
                <h3>Garantie 10 à 20 ans</h3>
                <p>
                  Garantie sur la quincaillerie Blum (20 ans) and sur la structure en bois (10 ans)
                  contre tout vice de fabrication.
                </p>
              </div>
            </div>
            <div className={styles.cert}>
              <div className={styles.certCheck}>✓</div>
              <div>
                <h3>Bois Certifié FSC</h3>
                <p>
                  Origine contrôlée and approvisionnement responsable issu de forêts gérées
                  durablement.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "38px" }}>
            <p className={styles.certNote}>
              Chaque projet fait l’objet d’un contrat d'engagement écrit and d'une facture
              transparente.
            </p>
          </div>
          <div className={styles.pageFoot}>
            <span>Garantie de qualité</span>
            <span>Manufacture Hismar</span>
          </div>
        </PageSection>
  );
};
