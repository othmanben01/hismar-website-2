"use client";

import React from "react";
import styles from "@/app/page.module.css";
import { MobileNav } from "@/components/Layout";
import {
  PageSection,
  ImageSlot,
  FloatingControl,
  Goldbox,
  Timeline,
  TimelineStep,
  TrackedLink,
} from "@/components/UI";
import { ContactForm } from "@/components/Forms";

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    title: "Consultation & écoute",
    description: "Vos besoins, vos plans, votre calendrier.",
  },
  {
    number: 2,
    title: "Devis détaillé sous 48 h",
    description: "Transparent, poste par poste.",
  },
  {
    number: 3,
    title: "Conception 2D & 3D offerte",
    description: "Visualisez chaque pièce avant fabrication.",
  },
  {
    number: 4,
    title: "Fabrication de précision",
    description: "En atelier, sur machines industrielles.",
  },
  {
    number: 5,
    title: "Pose & Réception",
    description: "Par nos équipes qualifiées.",
  },
];

export const CatalogPage: React.FC = () => {
  return (
    <>
      {/* Navigation Header */}
      <MobileNav />

      {/* Main Document slides */}
      <div className={styles.doc}>
        {/* ════ PAGE 1 — COUVERTURE ════ */}
        <PageSection theme="night" id="accueil" label="01 Couverture" className={styles.cover}>
          <div className={styles.coverTop}>
            <span>Manufacture de précision</span>
            <span>Casablanca — Est. 1968</span>
          </div>
          <div className={styles.coverCenter}>
            <div className={styles.coverEst}>Depuis 1968</div>
            <h1 className={styles.coverLogo}>HISMAR</h1>
            <div className={styles.coverRule}></div>
            <div className={styles.coverTagline}>Le bois&nbsp;élevé&nbsp;au rang d’art.</div>
            <div className={styles.coverSub}>
              Manufacture sur mesure pour chantiers de construction neuve — villas et résidences haut
              de gamme.
            </div>
            <div
              style={{
                marginTop: "20px",
                fontFamily: "var(--mono)",
                fontSize: "14.4px",
                letterSpacing: ".22em",
                color: "rgba(249,248,246,.55)",
              }}
            >
              Portes &nbsp;·&nbsp; Placards &nbsp;·&nbsp; Cuisines&nbsp;&nbsp;·&nbsp;&nbsp;sur mesure
            </div>
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
            <a className={styles.btnDevis} href="#contact">
              Demander un devis →
            </a>
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

        {/* ════ PAGE 2 — POURQUOI HISMAR ════ */}
        <PageSection theme="cream" id="pourquoi" label="02 Pourquoi Hismar">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>02 — Pourquoi Hismar</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Pourquoi Hismar</span>
            <h2 style={{ marginTop: "16px", maxWidth: "540px" }}>
              58 ans d’excellence industrielle
            </h2>
            <p className="lede" style={{ marginTop: "20px", maxWidth: "520px" }}>
              Depuis 1968, Hismar conçoit et fabrique la menuiserie des villas les plus exigeantes de
              Casablanca. Trois piliers fondent cette exigence.
            </p>
          </div>
          <div className={`${styles.bodyPad} ${styles.pillars}`} style={{ marginTop: "48px" }}>
            <div className={styles.pillar}>
              <span className={styles.pnum}>01</span>
              <h3>Héritage &amp; expertise depuis 1968</h3>
              <p>
                Près de six décennies d’engineering du bois au service de projets résidentiels
                d’exception.
              </p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pnum}>02</span>
              <h3>Ateliers industriels 1000&nbsp;m²</h3>
              <p>
                Machines de précision de dernière génération, pour une fabrication d’une régularité
                millimétrique.
              </p>
            </div>
            <div className={styles.pillar}>
              <span className={styles.pnum}>03</span>
              <h3>Matières premières européennes certifiées</h3>
              <p>Panneaux importés d’Europe, certifiés E1 — la traçabilité comme standard.</p>
            </div>
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "52px" }}>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.n}>58</div>
                <div className={styles.l}>Ans d’expérience</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.n}>+500</div>
                <div className={styles.l}>Villas réalisées</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.n}>1000&nbsp;m²</div>
                <div className={styles.l}>Ateliers industriels</div>
              </div>
            </div>
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "44px" }}>
            <ImageSlot
              id="p2-photo"
              defaultLabel="PHOTO — RÉALISATION INTÉRIEUR VILLA"
              style={{ width: "100%", height: "240px" }}
            />
          </div>
          <div className={styles.pageFoot}>
            <span>Hismar — Manufacture sur mesure</span>
            <span>Casablanca</span>
          </div>
        </PageSection>

        {/* ════ PAGE 3 — ATELIERS & TECHNOLOGIE ════ */}
        <PageSection id="ateliers" label="03 Ateliers et technologie">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>03 — Ateliers &amp; technologie</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Nos ateliers &amp; technologie</span>
            <h2 style={{ marginTop: "16px", maxWidth: "580px" }}>
              La précision industrielle au service de votre villa
            </h2>
          </div>
          <div
            className={styles.bodyPad}
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "1fr 240px",
              gap: "36px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="lede">
                Hismar dispose d’ateliers industriels haute performance équipés de machines de
                dernière génération. Chaque pièce y est fabriquée avec une précision millimétrique
                impossible à atteindre manuellement.
              </p>
              <div className={styles.machines} style={{ marginTop: "26px" }}>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—01</span>
                  <span className={styles.mname}>Presse hydraulique</span>
                </div>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—02</span>
                  <span className={styles.mname}>Scie à panneaux de précision millimétrique</span>
                </div>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—03</span>
                  <span className={styles.mname}>Bande de chant automatique</span>
                </div>
                <div className={styles.machine}>
                  <span className={styles.mnum}>M—04</span>
                  <span className={styles.mname}>
                    Placage de précision <em>machines italiennes</em>
                  </span>
                </div>
              </div>
            </div>
            <ImageSlot
              id="p3-machine"
              defaultLabel="PHOTO — MACHINE / ATELIER"
              style={{ width: "100%", height: "300px" }}
            />
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "38px" }}>
            <Goldbox
              mark="m²"
              title="1000 m² d’ateliers industriels à Casablanca"
              subtitle="Un processus de production intégré, de la découpe numérique au contrôle qualité final."
            />
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "36px" }}>
            <ImageSlot
              id="p3-atelier"
              defaultLabel="PHOTO — VUE D'ENSEMBLE DES ATELIERS"
              style={{ width: "100%", height: "240px" }}
            />
          </div>
          <div className={styles.pageFoot}>
            <span>Engineering du bois</span>
            <span>Précision millimétrique</span>
          </div>
        </PageSection>

        {/* ════ PAGE 4 — MATIÈRES PREMIÈRES ════ */}
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

        {/* ════ PAGE 5 — RÉALISATIONS ════ */}
        <PageSection label="05 Réalisations">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>05 — Réalisations</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Nos réalisations par service</span>
            <h2 style={{ marginTop: "16px" }}>Quatre expertises, une même précision</h2>
          </div>
          <div className={`${styles.bodyPad} ${styles.services}`} style={{ marginTop: "38px" }}>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s1"
                defaultLabel="PHOTO — PORTE PIVOT / ENTRÉE"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—01</span>
              <h3>Portes d’entrée sur mesure</h3>
              <p>
                Portes pivot monumentales, portes invisibles flush, intégration architecturale parfaite.
                Précision millimétrique.
              </p>
            </div>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s2"
                defaultLabel="PHOTO — PORTES INTÉRIEURES"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—02</span>
              <h3>Portes intérieures</h3>
              <p>
                Harmonie et cohérence entre chaque espace. Dimensions libres, finitions
                irréprochables.
              </p>
            </div>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s3"
                defaultLabel="PHOTO — PLACARD / DRESSING"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—03</span>
              <h3>Placards &amp; dressings</h3>
              <p>
                Système modulaire haute précision, optimisé pour chaque configuration d’espace.
              </p>
            </div>
            <div className={styles.service}>
              <ImageSlot
                id="p5-s4"
                defaultLabel="PHOTO — CUISINE SUR MESURE"
                style={{ width: "100%", height: "260px", marginBottom: "12px" }}
              />
              <span className={styles.snum}>S—04</span>
              <h3>Cuisines sur mesure</h3>
              <p>
                De la conception 3D à l’installation finale. Chaque composant fabriqué dans nos
                ateliers.
              </p>
            </div>
          </div>
          <div className={styles.pageFoot}>
            <span>Villas d’exception</span>
            <span>Casablanca · Dar Bouazza · Bouskoura · Ain Diab</span>
          </div>
        </PageSection>

        {/* ════ PAGE 5A-1 — PORTES D'ENTRÉE (1/2) ════ */}
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

        {/* ════ PAGE 5A-2 — PORTES D'ENTRÉE (2/2) ════ */}
        <PageSection theme="cream" label="05A Portes d'entrée 2/2">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>S — 01 · Portes d’entrée</span>
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
                id="pe-traitement"
                defaultLabel="PHOTO — DÉTAIL FINITION / TEXTURE EXTÉRIEURE"
                style={{ width: "100%", height: "240px" }}
              />
              <div style={{ marginTop: "18px" }}>
                <span className="eyebrow">Triple protection à l’italienne</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Traitement insecticide, anti-UV and anti-intempéries — fond et vernis italiens
                  appliqués en atelier. La porte conserve sa teinte et sa structure intactes, saison
                  après saison. Fabriquée pour durer une vie.
                </p>
              </div>
            </div>
            <div>
              <ImageSlot
                id="pe-acier"
                defaultLabel="PHOTO — ARMATURE ACIER / COUPE TECHNIQUE"
                style={{ width: "100%", height: "240px" }}
              />
              <div style={{ marginTop: "18px" }}>
                <span className="eyebrow">PROFILE ACIER INTERIEURE</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Un profilé en acier en L, incrusté avec précision dans l'encadrement en bois
                  rouge. Une armature invisible qui garantit une stabilité absolue contre le
                  gauchissement.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "34px" }}>
            <div className="rule-gold" style={{ marginBottom: "22px" }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }}>
              <div>
                <span className="eyebrow">Quincaillerie allemande</span>
                <p style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
                  Pivots, paumelles et systèmes de fermeture anti-corrosion, garantie 10 ans
                  fabricant. Mécanismes éprouvés sur des millions de cycles — fiabilité totale sur
                  la durée.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "14px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>
                      Anti-corrosion — traitement inox ou laiton massif
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>Garantie 10 ans fabricant incluse</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                    <span style={{ color: "var(--gold)" }}>—</span>
                    <span style={{ fontSize: "15px" }}>
                      Certifiée pour les formats pivots grande dimension
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ border: "1px solid var(--gold)", padding: "28px 24px", textAlign: "center" }}>
                <span className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
                  Commencez votre projet
                </span>
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "33.6px",
                    color: "var(--night)",
                    lineHeight: "1.2",
                    marginBottom: "16px",
                  }}
                >
                  Plans 3D
                  <br />
                  <span style={{ fontStyle: "italic", color: "var(--gold)" }}>gratuits</span>
                </div>
                <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }}></div>
                <div style={{ fontFamily: "var(--serif)", fontSize: "21.6px", color: "var(--night)" }}>
                  Devis sous <span style={{ color: "var(--gold)" }}>48h</span>
                </div>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "14.4px",
                    color: "var(--ink-light)",
                    lineHeight: "1.6",
                  }}
                >
                  Notre équipe vous contacte rapidement pour organiser une consultation et une étude
                  personnalisée.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.pageFoot}>
            <span>Portes d’entrée — 2 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>

        {/* ════ PAGE 5B-1 — PORTES INTÉRIEURES (1/2) ════ */}
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

        {/* ════ PAGE 5B-2 — PORTES INTÉRIEURES (2/2) ════ */}
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

        {/* ════ PAGE 5C-1 — PLACARDS & DRESSINGS (1/2) ════ */}
        <PageSection
          theme="night"
          id="placards"
          label="05C Placards 1/2"
          className={styles.pageHeadNight}
        >
          <div className={styles.pageHead} style={{ paddingTop: "44px" }}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>S — 03 · Placards &amp; dressings</span>
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
              <span className="eyebrow">Placards &amp; dressings sur mesure</span>
              <h2
                style={{
                  marginTop: "13px",
                  color: "var(--cream)",
                  fontSize: "40.8px",
                  lineHeight: "1.1",
                  maxWidth: "420px",
                }}
              >
                Placards sur mesure — 5 façades, 8 configurations, zéro compromis.
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
                MDF européen certifié, quincaillerie Blum garantie 20 ans, traitement exclusif
                anti-humidité Hismar. Machines SCM italiennes — précision millimétrique.
              </p>
              <div
                style={{
                  marginTop: "26px",
                  borderLeft: "1px solid rgba(168,131,74,.5)",
                  paddingLeft: "18px",
                }}
              >
                <span className="eyebrow">Effet habillage mural</span>
                <p
                  style={{
                    marginTop: "9px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.65)",
                  }}
                >
                  Portes intégrées avec panneau sol-plafond — zéro cadre visible. Le placard
                  disparaît dans l’architecture. Il ne reste que la surface, le grain et la ligne.
                </p>
              </div>
            </div>
            <ImageSlot
              id="pl-hero"
              defaultLabel="PHOTO — PLACARD EFFET MURAL SOL-PLAFOND"
              style={{ width: "100%", height: "360px" }}
            />
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "30px" }}>
            <div
              style={{ height: "1px", background: "rgba(168,131,74,.25)", marginBottom: "20px" }}
            ></div>
            <span className="eyebrow">5 Façades au choix</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "13px" }}>
              <ImageSlot
                id="pl-fac-1"
                defaultLabel="MDF MÉLAMINÉ"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pl-fac-2"
                defaultLabel="HDF LAQUÉ"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pl-fac-3"
                defaultLabel="VERRE ALUMINIUM"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pl-fac-4"
                defaultLabel="PLACAGE NATUREL"
                style={{ width: "100%", height: "80px" }}
              />
              <ImageSlot
                id="pl-fac-5"
                defaultLabel="ROTIN"
                style={{ width: "100%", height: "80px" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "6px" }}>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".18em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                MDF MÉLAMINÉ
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".18em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                HDF LAQUÉ
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".18em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                VERRE ALU
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".18em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                PLACAGE NAT.
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".18em",
                  color: "rgba(249,248,246,.32)",
                }}
              >
                ROTIN
              </span>
            </div>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "28px" }}>
            <div
              style={{ height: "1px", background: "rgba(168,131,74,.25)", marginBottom: "20px" }}
            ></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px" }}>
              <div>
                <span className="eyebrow">Traitement anti-humidité exclusif</span>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.65)",
                  }}
                >
                  Socle bois sapin traité, bords MDF avec profilé PVC, traitement exclusif Hismar —
                  protection totale contre l’eau. Idéal pour dressings, salles de bain and espaces
                  humides.
                </p>
              </div>
              <div>
                <span className="eyebrow">Machines SCM italiennes</span>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.65)",
                  }}
                >
                  Scie panneau and robot bande de chant SCM, Italie — précision millimétrique sur
                  chaque pièce. Répétabilité industrielle, finitions irréprochables.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.pageFoot} ${styles.pageFootNight}`}>
            <span>Placards &amp; dressings — 1 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>

        {/* ════ PAGE 5C-2 — PLACARDS & DRESSINGS (2/2) ════ */}
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

        {/* ════ PAGE 5D-1 — CUISINES SUR MESURE (1/2) ════ */}
        <PageSection
          theme="night"
          id="cuisines"
          label="05D Cuisines 1/2"
          className={styles.pageHeadNight}
        >
          <div className={styles.pageHead} style={{ paddingTop: "44px" }}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>S — 04 · Cuisines sur mesure</span>
          </div>

          <div
            className={styles.bodyPad}
            style={{
              paddingTop: "30px",
              display: "grid",
              gridTemplateColumns: "1fr 252px",
              gap: "36px",
              alignItems: "start",
            }}
          >
            <div>
              <span className="eyebrow">Cuisines sur mesure</span>
              <h2
                style={{
                  marginTop: "13px",
                  color: "var(--cream)",
                  fontSize: "40.8px",
                  lineHeight: "1.1",
                  maxWidth: "400px",
                }}
              >
                La cuisine qui résiste à tout. Et impressionne pour toujours.
              </h2>
              <p
                style={{
                  marginTop: "14px",
                  fontFamily: "var(--mono)",
                  fontSize: "10.8px",
                  letterSpacing: ".22em",
                  color: "var(--gold)",
                }}
              >
                5 FAÇADES · 5 PLANS DE TRAVAIL
              </p>
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "15.6px",
                  lineHeight: "1.76",
                  color: "rgba(249,248,246,.65)",
                  maxWidth: "360px",
                }}
              >
                Caissons en latte bois, façades premium, plans de travail sur mesure. De la
                conception 3D à l’installation finale — entièrement fabriqué dans nos ateliers de
                Casablanca.
              </p>

              <div
                style={{
                  marginTop: "24px",
                  borderLeft: "1px solid rgba(168,131,74,.5)",
                  paddingLeft: "18px",
                }}
              >
                <span className="eyebrow">Caissons en latte bois</span>
                <p
                  style={{
                    marginTop: "9px",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    color: "rgba(249,248,246,.65)",
                  }}
                >
                  Résistance totale aux fuites d’eau. Contrairement au MDF, la latte bois ne
                  gonfle pas — vos caissons restent intacts quelle que soit l’humidité.
                </p>
              </div>
            </div>
            <ImageSlot
              id="cu-hero"
              defaultLabel="PHOTO — CUISINE RÉALISATION VILLA"
              style={{ width: "100%", height: "360px" }}
            />
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "26px" }}>
            <div
              style={{ height: "1px", background: "rgba(168,131,74,.25)", marginBottom: "18px" }}
            ></div>
            <span className="eyebrow">5 Plans de travail sur mesure</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "12px" }}>
              <ImageSlot
                id="cu-pt-1"
                defaultLabel="DEKTON"
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-pt-2"
                defaultLabel="CÉRAMIQUE"
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-pt-3"
                defaultLabel="QUARTZ"
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-pt-4"
                defaultLabel="GRANITE"
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-pt-5"
                defaultLabel="COMPACT"
                style={{ width: "100%", height: "75px" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "5px" }}>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                DEKTON
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                CÉRAMIQUE
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                QUARTZ
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                GRANITE
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                COMPACT
              </span>
            </div>
          </div>

          <div className={styles.bodyPad} style={{ marginTop: "22px" }}>
            <div
              style={{ height: "1px", background: "rgba(168,131,74,.25)", marginBottom: "18px" }}
            ></div>
            <span className="eyebrow">5 Façades au choix</span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "12px" }}>
              <ImageSlot
                id="cu-fac-1"
                defaultLabel="MDF MÉLAMINÉ"
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-fac-2"
                defaultLabel="HDF LAQUÉ"
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-fac-3"
                defaultLabel="VERRE ALU"
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-fac-4"
                defaultLabel="PLACAGE NAT."
                style={{ width: "100%", height: "75px" }}
              />
              <ImageSlot
                id="cu-fac-5"
                defaultLabel="ROTIN"
                style={{ width: "100%", height: "75px" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "9px", marginTop: "5px" }}>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                MDF MÉLAMINÉ
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                HDF LAQUÉ
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                VERRE ALU
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                PLACAGE NAT.
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontFamily: "var(--mono)",
                  fontSize: "8.4px",
                  letterSpacing: ".16em",
                  color: "rgba(249,248,246,.3)",
                }}
              >
                ROTIN
              </span>
            </div>
          </div>

          <div className={`${styles.pageFoot} ${styles.pageFootNight}`}>
            <span>Cuisines sur mesure — 1 / 2</span>
            <span>Manufacture Hismar — Casablanca</span>
          </div>
        </PageSection>

        {/* ════ PAGE 5D-2 — CUISINES SUR MESURE (2/2) ════ */}
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

        {/* ════ PAGE 6 — PROCESSUS ════ */}
        <PageSection theme="cream" id="processus" label="06 Processus">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>06 — Notre processus</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Notre processus</span>
            <h2 style={{ marginTop: "16px", maxWidth: "540px" }}>
              De votre vision à la réalisation
            </h2>
            <p className="lede" style={{ marginTop: "18px", maxWidth: "520px" }}>
              Un processus de production maîtrisé de bout en bout, dans nos ateliers de Casablanca.
            </p>
          </div>
          <div className={styles.bodyPad} style={{ marginTop: "52px" }}>
            <Timeline steps={TIMELINE_STEPS} />
            <div className={styles.processNote} style={{ marginTop: "50px", textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontStyle: "italic",
                  fontSize: "19.2px",
                  color: "var(--gold)",
                }}
              >
                Le bois élevé au rang d’art depuis 1968.
              </span>
            </div>
          </div>
          <div className={styles.pageFoot}>
            <span>Processus certifié</span>
            <span>Accompagnement de A à Z</span>
          </div>
        </PageSection>

        {/* ════ PAGE 7 — CERTIFICATIONS & ENGAGEMENTS ════ */}
        <PageSection id="certifications" label="07 Certifications">
          <div className={styles.pageHead}>
            <span className={styles.logoSm}>HISMAR</span>
            <span className={styles.meta}>07 — Engagements &amp; Garanties</span>
          </div>
          <div className={styles.bodyPad} style={{ paddingTop: "54px" }}>
            <span className="eyebrow">Nos garanties</span>
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

        {/* ════ PAGE 8 — CONTACT ════ */}
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
      </div>

      {/* Floating alignment options toolbar */}
      <FloatingControl />

      {/* Mobile Floating WhatsApp Action Button */}
      <TrackedLink
        className={styles.waFab}
        eventName="contact_whatsapp"
        fbEventName="Contact"
        href="https://wa.me/212662177069"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.857L.057 23.885a.75.75 0 0 0 .921.921l6.101-1.46A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.88 0-3.645-.52-5.153-1.424l-.37-.22-3.822.914.93-3.741-.242-.384A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
        </svg>
      </TrackedLink>
    </>
  );
};
