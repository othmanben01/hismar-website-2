"use client";

import React, { useState, useCallback, useRef } from "react";
import styles from "./MobileNav.module.css";
import { useClickOutside } from "@/hooks/useClickOutside";
import { TrackedLink } from "@/components/UI";

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close menu when clicking outside
  useClickOutside(menuRef, closeMenu);

  const menuLinks = [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#pourquoi", label: "Pourquoi Hismar" },
    { href: "/#ateliers", label: "Nos ateliers" },
    { href: "/portes-entree", label: "Portes d’entrée" },
    { href: "/portes-interieures", label: "Portes intérieures" },
    { href: "/placards", label: "Placards & dressings" },
    { href: "/cuisines", label: "Cuisines" },
    { href: "/#processus", label: "Processus" },
    { href: "/#contact", label: "Contact" },
    { href: "https://wa.me/212662177069", label: "WhatsApp", isExternal: true },
  ];

  return (
    <nav className={`mobnav ${styles.mobnav}`} ref={menuRef} aria-label="Navigation principale">
      <div className={styles.mobnavBar}>
        <span className={styles.brand}>HISMAR</span>
        <div className={styles.right}>
          <TrackedLink
            href="#contact"
            eventName="contact_quote"
            fbEventName="Lead"
            className={styles.quoteBtn}
            onClick={closeMenu}
          >
            Demander un devis
          </TrackedLink>
          <TrackedLink
            className={styles.tel}
            href="tel:+212662177069"
            eventName="contact_phone"
            fbEventName="Contact"
          >
            +212 662 177 069
          </TrackedLink>
          <button
            className={styles.toggle}
            onClick={toggleMenu}
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Menu"
          >
            <span className={styles.toggleBar}></span>
            <span className={styles.toggleBar}></span>
            <span className={styles.toggleBar}></span>
          </button>
        </div>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        {menuLinks.map((link) => {
          if (link.isExternal) {
            return (
              <TrackedLink
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`${styles.menuLink} ${styles.waLink}`}
                eventName="contact_whatsapp"
                fbEventName="Contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </TrackedLink>
            );
          }
          return (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu} 
              className={styles.menuLink}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
