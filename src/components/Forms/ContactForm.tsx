"use client";

import React, { useState, useCallback } from "react";
import styles from "./ContactForm.module.css";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { trackConversion } from "@/utils/tracking";

export const ContactForm: React.FC = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [construction, setConstruction] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleConstructionClick = (value: string) => {
    setConstruction((prev) => (prev === value ? null : value));
  };

  const handleTypeClick = (value: string) => {
    setType((prev) => (prev === value ? null : value));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!construction) {
        setError("Veuillez sélectionner un type de construction.");
        return;
      }
      if (!type) {
        setError("Veuillez sélectionner un type de projet.");
        return;
      }

      setError("");

      const link = getWhatsAppLink({
        prenom,
        nom,
        tel,
        construction,
        type,
        msg,
      });

      // Tracking des conversions
      trackConversion("form_submit", "Lead");

      window.open(link, "_blank");
    },
    [prenom, nom, tel, construction, type, msg]
  );

  return (
    <form className={styles.formSection} onSubmit={handleSubmit}>
      {/* Required fields notice */}
      <p
        style={{
          fontSize: "11px",
          color: "rgba(249,248,246,0.4)",
          fontFamily: "var(--mono)",
          letterSpacing: ".06em",
          marginBottom: "20px",
        }}
      >
        * Tous les champs sont obligatoires
      </p>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="f-prenom" className={styles.label}>
            Prénom
          </label>
          <input
            type="text"
            id="f-prenom"
            placeholder="Votre prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="f-nom" className={styles.label}>
            Nom
          </label>
          <input
            type="text"
            id="f-nom"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formField}>
          <label htmlFor="f-tel" className={styles.label}>
            Téléphone
          </label>
          <input
            type="tel"
            id="f-tel"
            placeholder="Ex: +212 600 000 000"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.full}`}>
        <div className={styles.formField}>
          <label className={styles.label}>Type de construction</label>
          <div className={styles.radioGroup}>
            {["Nouvelle construction", "Rénovation"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleConstructionClick(val)}
                className={`${styles.radioLabel} ${construction === val ? styles.radioLabelActive : ""}`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.full}`}>
        <div className={styles.formField}>
          <label className={styles.label}>Type de projet</label>
          <div className={styles.radioGroup}>
            {["Villa", "Immeuble", "Appartement", "Autres"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => handleTypeClick(val)}
                className={`${styles.radioLabel} ${type === val ? styles.radioLabelActive : ""}`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.full}`}>
        <div className={styles.formField}>
          <label htmlFor="f-msg" className={styles.label}>
            Description
          </label>
          <textarea
            id="f-msg"
            rows={4}
            placeholder="Décrivez votre projet..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
            className={styles.textarea}
          />
        </div>
      </div>

      {error && (
        <p
          style={{
            fontSize: "12px",
            color: "#c0392b",
            fontFamily: "var(--mono)",
            letterSpacing: ".05em",
            marginBottom: "12px",
          }}
        >
          {error}
        </p>
      )}

      <button type="submit" className={styles.btnSubmit}>
        Envoyer via WhatsApp →
      </button>
    </form>
  );
};
