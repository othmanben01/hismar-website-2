"use client";

import React, { useState, useCallback } from "react";
import styles from "./ContactForm.module.css";
import { getWhatsAppLink } from "@/utils/whatsapp";
import { trackConversion } from "@/utils/tracking";

export const ContactForm: React.FC = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [construction, setConstruction] = useState("Nouvelle construction");
  const [type, setType] = useState("Villa");
  const [msg, setMsg] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      
      const link = getWhatsAppLink({
        prenom,
        nom,
        tel,
        construction,
        type,
        msg,
      });

      // Tracking des conversions
      trackConversion("generate_lead", "Lead");
      
      window.open(link, "_blank");
    },
    [prenom, nom, tel, construction, type, msg]
  );

  return (
    <form className={styles.formSection} onSubmit={handleSubmit}>
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
            <input
              type="radio"
              name="construction"
              id="c-nouvelle"
              value="Nouvelle construction"
              checked={construction === "Nouvelle construction"}
              onChange={() => setConstruction("Nouvelle construction")}
              className={styles.radioInput}
            />
            <label htmlFor="c-nouvelle" className={styles.radioLabel}>
              Nouvelle construction
            </label>

            <input
              type="radio"
              name="construction"
              id="c-renovation"
              value="Rénovation"
              checked={construction === "Rénovation"}
              onChange={() => setConstruction("Rénovation")}
              className={styles.radioInput}
            />
            <label htmlFor="c-renovation" className={styles.radioLabel}>
              Rénovation
            </label>
          </div>
        </div>
      </div>

      <div className={`${styles.formRow} ${styles.full}`}>
        <div className={styles.formField}>
          <label className={styles.label}>Type de projet</label>
          <div className={styles.radioGroup}>
            <input
              type="radio"
              name="type"
              id="t-villa"
              value="Villa"
              checked={type === "Villa"}
              onChange={() => setType("Villa")}
              className={styles.radioInput}
            />
            <label htmlFor="t-villa" className={styles.radioLabel}>
              Villa
            </label>

            <input
              type="radio"
              name="type"
              id="t-immeuble"
              value="Immeuble"
              checked={type === "Immeuble"}
              onChange={() => setType("Immeuble")}
              className={styles.radioInput}
            />
            <label htmlFor="t-immeuble" className={styles.radioLabel}>
              Immeuble
            </label>

            <input
              type="radio"
              name="type"
              id="t-appartement"
              value="Appartement"
              checked={type === "Appartement"}
              onChange={() => setType("Appartement")}
              className={styles.radioInput}
            />
            <label htmlFor="t-appartement" className={styles.radioLabel}>
              Appartement
            </label>
            
            <input
              type="radio"
              name="type"
              id="t-autres"
              value="Autres"
              checked={type === "Autres"}
              onChange={() => setType("Autres")}
              className={styles.radioInput}
            />
            <label htmlFor="t-autres" className={styles.radioLabel}>
              Autres
            </label>
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

      <button type="submit" className={styles.btnSubmit}>
        Envoyer via WhatsApp →
      </button>
    </form>
  );
};
