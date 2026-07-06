import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

export const PortesEntree1Section: React.FC = () => {
  return (
    <PageSection
          theme="night"
          id="entree"
          label="05A Portes d'entrée 1/2"
          className={styles.pageHeadNight}
        >
          <div className={styles.pageHead} style={{ paddingTop: "44px" }}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>S — 01 · Portes d’entrée</span>
          </div>

          <div
            className={styles.bodyPad}
            style={{
              paddingTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr 252px",
              gap: "36px",
              alignItems: "start",
            }}
          >
            <div>
              <span className="eyebrow">Portes d’entrée sur mesure</span>
              <h2
                style={{
                  marginTop: "13px",
                  color: "var(--cream)",
                  fontSize: "43.2px",
                  lineHeight: "1.1",
                  maxWidth: "400px",
                }}
              >
                La porte d’entrée qui impressionne. Pour toujours.
              </h2>
              <p
                style={{
                  marginTop: "18px",
                  fontSize: "15.6px",
                  lineHeight: "1.76",
                  color: "rgba(249,248,246,.65)",
                  maxWidth: "380px",
                }}
              >
                Pivot sol-plafond, sans jointure. Traitement triple protection à l’italienne.
                Quincaillerie allemande garantie 10 ans. Hismar — Casablanca depuis 1968.
              </p>

              <div className={styles.coverCtas} style={{ marginTop: "32px", justifyContent: "flex-start" }}>
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
                <a className={styles.btnDevis} href="#contact">
                  Demander un devis →
                </a>
              </div>

              <div
                style={{
                  marginTop: "28px",
                  borderLeft: "1px solid rgba(168,131,74,.5)",
                  paddingLeft: "18px",
                }}
              >
                <span className="eyebrow">Porte pivot sol-plafond</span>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15.6px",
                    lineHeight: "1.72",
                    color: "rgba(249,248,246,.65)",
                  }}
                >
                  Du sol au plafond, sans jointure. Un seul plan continu qui efface la limite entre
                  architecture et menuiserie — une présence monumentale dès l’entrée.
                </p>
              </div>
            </div>
            <ImageSlot
              id="pe-hero"
              defaultLabel="PHOTO — PORTE PIVOT SOL-PLAFOND"
              style={{ width: "100%", height: "370px" }}
            />
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
            <div
              style={{ height: "1px", background: "rgba(168,131,74,.25)", marginBottom: "24px" }}
            ></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", alignItems: "start" }}>
              <div>
                <span className="eyebrow">Finition bois massif</span>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.62)",
                  }}
                >
                  Essence naturelle sélectionnée, veinure visible, texture d’exception.
                </p>
              </div>
              <div>
                <span className="eyebrow">HPL compact</span>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.62)",
                  }}
                >
                  Résistance extrême aux chocs et aux UV. Décors modernes, finitions mate ou satinée.
                </p>
              </div>
              <div>
                <span className="eyebrow">Composite</span>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.62)",
                  }}
                >
                  Légèreté et durabilité. Idéal pour les grandes dimensions et les formats pivots.
                </p>
              </div>
            </div>
          </div>

          <div
            className={styles.bodyPad}
            style={{
              marginTop: "22px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "10px",
            }}
          >
            <ImageSlot
              id="pe-fin-1"
              defaultLabel="FINITION BOIS MASSIF"
              style={{ width: "100%", height: "130px" }}
            />
            <ImageSlot
              id="pe-fin-2"
              defaultLabel="FINITION HPL COMPACT"
              style={{ width: "100%", height: "130px" }}
            />
            <ImageSlot
              id="pe-fin-3"
              defaultLabel="FINITION COMPOSITE"
              style={{ width: "100%", height: "130px" }}
            />
          </div>

          <div className={`${styles.pageFoot} ${styles.pageFootNight}`}>
            <span>Portes d’entrée — 1 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>
  );
};
