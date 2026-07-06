import React from "react";
import styles from "@/app/page.module.css";
import { PageSection, ImageSlot } from "@/components/UI";
import {
  CategoryHeader,
  CategoryFooter,
  CategoryHeroCTAs,
  FeatureHighlight,
  TextFeaturesGrid,
  ImageFeaturesGrid,
  SectionDivider,
} from "@/components/UI";

export const PortesInterieures1Section: React.FC = () => {
  return (
    <PageSection
      theme="night"
      id="interieur"
      label="05B Portes intérieures 1/2"
      className={styles.pageHeadNight}
    >
      <CategoryHeader meta="S — 02 · Portes intérieures" />

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

          <CategoryHeroCTAs />

          <FeatureHighlight
            title="Fabrication de précision"
            description="Machines italiennes — presse hydraulique, robot bande de chant. Placages et chants
              collés à très haute chaleur et pression : liaison permanente, zéro décollement."
          />
        </div>
        <ImageSlot
          id="pi-hero"
          defaultLabel="PHOTO — PORTE INVISIBLE FLUSH"
          style={{ width: "100%", height: "360px" }}
        />
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
        <SectionDivider />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "start" }}>
          <TextFeaturesGrid
            features={[
              {
                title: "Triple isolation acoustique",
                description: (
                  <>
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
                  </>
                ),
              },
              {
                title: "Quincaillerie invisible",
                description: null,
                list: [
                  "Paumelles invisibles encastrées dans le bâti",
                  "Serrures magnétiques — fermeture silencieuse",
                  "Canons sécuritaires — zéro hardware visible",
                ],
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
        <SectionDivider marginBottom="22px" />
        <span className="eyebrow">5 Essences premium au choix</span>
        <ImageFeaturesGrid
          images={[
            { id: "pi-bois-1", label: "EUCALYPTUS", caption: "EUCALYPTUS" },
            { id: "pi-bois-2", label: "NOYER", caption: "NOYER" },
            { id: "pi-bois-3", label: "DIBETOU", caption: "DIBETOU" },
            { id: "pi-bois-4", label: "IROKO", caption: "IROKO" },
            { id: "pi-bois-5", label: "CHÊNE", caption: "CHÊNE" },
          ]}
          height="80px"
        />
      </div>

      <CategoryFooter title="Portes intérieures — 1 / 2" />
    </PageSection>
  );
};
