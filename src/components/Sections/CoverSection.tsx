import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Reveal } from "@/components/UI";

interface CoverSectionProps {
  title?: string;
  subtitle?: string;
}

export const CoverSection: React.FC<CoverSectionProps> = ({
  title = "Menuiserie d'art et agencement d'intérieur.",
  subtitle = "Portes intérieures et d'entrée, dressings et cuisines sur mesure."
}) => {
  return (
    <PageSection theme="night" id="accueil" label="01 Couverture" className={styles.cover}>
      <div className={styles.coverTop}>
        <span>Manufacture de précision</span>
        <span>Casablanca — Est. 1968</span>
      </div>
      <div className={styles.coverCenter}>
        <Reveal>
          <div className={styles.coverEst}>Depuis 1968</div>
          <h1 className={styles.coverLogo}>HISMAR</h1>
        </Reveal>
        
        <Reveal delay={0.1}>
          <div className={styles.coverRule}></div>
          <p className={styles.coverTagline} style={{ marginTop: "22px" }}>
            {title}
          </p>
          <div className={styles.coverSub}>
            {subtitle}
          </div>
        </Reveal>
        <div
          style={{
            marginTop: "9px",
            fontFamily: "var(--mono)",
            fontSize: "14.4px",
            letterSpacing: ".18em",
            color: "rgba(168,131,74,.7)",
          }}
        >
          Installation sur tout le Maroc
        </div>
      </div>
      <div className={styles.coverCtas}>
        <TrackedLink
          className={styles.btnWa}
          eventName="contact_whatsapp"
          fbEventName="Contact"
          href="https://wa.me/212662177069"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="#4fda88"
            style={{ marginRight: "4px" }}
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.885a.75.75 0 0 0 .921.921l6.101-1.46A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.645-.52-5.153-1.424l-.37-.22-3.822.914.93-3.741-.242-.384A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
          </svg>
          Discuter sur WhatsApp
        </TrackedLink>
        <TrackedLink 
          className={styles.btnDevis} 
          href="#contact"
          eventName="contact_quote"
          fbEventName="Lead"
        >
          Demander un devis →
        </TrackedLink>
      </div>
      <div className={styles.coverPhoto} style={{ marginTop: "16px" }}>
        <ImageSlot
          id="cover-hero"
          defaultLabel="PHOTO — PORTE PIVOT / RÉALISATION VILLA"
          style={{ width: "100%", height: "320px" }}
        />
      </div>
      <div className={styles.coverFoot}>
        <span>www.hismarmenuiserie.ma</span>
        <span>Présentation commerciale</span>
      </div>
    </PageSection>
  );
};
