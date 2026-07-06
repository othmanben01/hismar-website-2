import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot, TrackedLink, Goldbox, Timeline, TimelineStep } from "@/components/UI";
import { ContactForm } from "@/components/Forms";

export const PortesInterieures1Section: React.FC = () => {
  return (
    <PageSection
          theme="night"
          id="interieur"
          label="05B Portes intérieures 1/2"
          className={styles.pageHeadNight}
        >
          <div className={styles.pageHead} style={{ paddingTop: "44px" }}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>S — 02 · Portes intérieures</span>
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
              <span className="eyebrow">Portes intérieures</span>
              <h2
                style={{
                  marginTop: "13px",
                  color: "var(--cream)",
                  fontSize: "43.2px",
                  lineHeight: "1.1",
                  maxWidth: "420px",
                }}
              >
                Une porte qu’on ne voit pas.
                <br />
                Un espace qu’on ressent.
              </h2>
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "15.6px",
                  lineHeight: "1.76",
                  color: "rgba(249,248,246,.65)",
                  maxWidth: "370px",
                }}
              >
                Portes invisibles, zéro hardware visible. Triple isolation acoustique. Placage 1
                <sup style={{ fontSize: ".75em" }}>er</sup> choix mondial. 5 essences premium :
                eucalyptus, noyer, Dibetou, Iroko, chêne.
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
                  marginTop: "26px",
                  borderLeft: "1px solid rgba(168,131,74,.5)",
                  paddingLeft: "18px",
                }}
              >
                <span className="eyebrow">Fabrication de précision</span>
                <p
                  style={{
                    marginTop: "9px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.65)",
                  }}
                >
                  Machines italiennes — presse hydraulique, robot bande de chant. Placages et chants
                  collés à très haute chaleur et pression : liaison permanente, zéro décollement.
                </p>
              </div>
            </div>
            <ImageSlot
              id="pi-hero"
              defaultLabel="PHOTO — PORTE INVISIBLE FLUSH"
              style={{ width: "100%", height: "360px" }}
            />
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
            <div
              style={{ height: "1px", background: "rgba(168,131,74,.25)", marginBottom: "24px" }}
            ></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "start" }}>
              <div>
                <span className="eyebrow">Triple isolation acoustique</span>
                <p
                  style={{
                    marginTop: "11px",
                    fontSize: "15.6px",
                    lineHeight: "1.72",
                    color: "rgba(249,248,246,.65)",
                  }}
                >
                  Chaque porte intègre trois couches d’isolation :{" "}
                  <strong style={{ color: "rgba(249,248,246,.85)", fontWeight: 400 }}>bois</strong>
                  ,{" "}
                  <strong style={{ color: "rgba(249,248,246,.85)", fontWeight: 400 }}>
                    laine de verre
                  </strong>{" "}
                  et{" "}
                  <strong style={{ color: "rgba(249,248,246,.85)", fontWeight: 400 }}>
                    mousse polyuréthane
                  </strong>
                  . Confort acoustique garanti entre chaque espace.
                </p>
              </div>
              <div>
                <span className="eyebrow">Quincaillerie invisible</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: "15px", color: "rgba(249,248,246,.65)" }}>
                      Paumelles invisibles encastrées dans le bâti
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: "15px", color: "rgba(249,248,246,.65)" }}>
                      Serrures magnétiques — fermeture silencieuse
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                    <span style={{ fontSize: "15px", color: "rgba(249,248,246,.65)" }}>
                      Canons sécuritaires — zéro hardware visible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
            <div
              style={{ height: "1px", background: "rgba(168,131,74,.25)", marginBottom: "22px" }}
            ></div>
            <span className="eyebrow">5 Essences premium au choix</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "13px" }}>
              <ImageSlot
                id="pi-bois-1"
                defaultLabel="EUCALYPTUS"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pi-bois-2"
                defaultLabel="NOYER"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pi-bois-3"
                defaultLabel="DIBETOU"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pi-bois-4"
                defaultLabel="IROKO"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pi-bois-5"
                defaultLabel="CHÊNE"
                style={{ width: "100%", height: "80px" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "6px" }}>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  letterSpacing: ".2em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                EUCALYPTUS
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  letterSpacing: ".2em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                DIBETOU
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  letterSpacing: ".2em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                NOYER
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  letterSpacing: ".2em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                IROKO
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "9px",
                  letterSpacing: ".2em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                CHÊNE
              </span>
            </div>
          </div>

          <div className={`${styles.pageFoot} ${styles.pageFootNight}`}>
            <span>Portes intérieures — 1 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>
  );
};
