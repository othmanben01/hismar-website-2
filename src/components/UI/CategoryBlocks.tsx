import React from "react";
import styles from "@/app/page.module.css";
import { ImageSlot, TrackedLink } from "@/components/UI";

export const CategoryHeader = ({ meta }: { meta: string }) => (
  <div className={styles.pageHead} style={{ paddingTop: "44px" }}>
    <span className={styles.logoSm}>HISMAR</span>
    <span className={styles.meta}>{meta}</span>
  </div>
);

export const CategoryFooter = ({ title }: { title: string }) => (
  <div className={`${styles.pageFoot} ${styles.pageFootNight}`}>
    <span>{title}</span>
    <span>Manufacture Hismar — Casablanca</span>
  </div>
);

export const CategoryHeroCTAs = () => (
  <div className={styles.coverCtas} style={{ marginTop: "32px", justifyContent: "flex-start", padding: 0, marginLeft: 0 }}>
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
);

export const FeatureHighlight = ({ title, description }: { title: string; description: React.ReactNode }) => (
  <div
    style={{
      marginTop: "26px",
      borderLeft: "1px solid rgba(168,131,74,.5)",
      paddingLeft: "18px",
    }}
  >
    <span className="eyebrow">{title}</span>
    <div
      style={{
        marginTop: "9px",
        fontSize: "15px",
        lineHeight: "1.7",
        color: "rgba(249,248,246,.65)",
      }}
    >
      {description}
    </div>
  </div>
);

export const TextFeaturesGrid = ({
  features,
  theme = "night",
}: {
  features: { title: string; description: React.ReactNode; list?: string[] }[];
  theme?: "night" | "cream";
}) => {
  const textColor = theme === "night" ? "rgba(249,248,246,.65)" : undefined;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${features.length}, 1fr)`,
        gap: "24px",
        alignItems: "start",
      }}
    >
      {features.map((f, i) => (
        <div key={i}>
          <span className="eyebrow">{f.title}</span>
          {f.description && (
            <div
              style={{
                marginTop: "10px",
                fontSize: "15px",
                lineHeight: "1.7",
                color: textColor,
              }}
            >
              {f.description}
            </div>
          )}
          {f.list && f.list.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "11px" }}>
              {f.list.map((item, j) => (
                <div key={j} style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                  <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
                  <span style={{ fontSize: "15px", color: textColor }}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const ImageFeaturesGrid = ({
  images,
  height = "80px",
  fontSize = "11px",
  letterSpacing = ".15em",
}: {
  images: { id: string; label: string; caption: string }[];
  height?: string;
  fontSize?: string;
  letterSpacing?: string;
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${images.length}, 1fr)`,
      gap: "12px",
      marginTop: "16px",
    }}
  >
    {images.map((img, i) => (
      <div key={i} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <ImageSlot
          id={img.id}
          defaultLabel={img.label}
          style={{ width: "100%", height }}
        />
        <span
          style={{
            textAlign: "center",
            fontFamily: "var(--mono)",
            fontSize,
            letterSpacing,
            color: "rgba(249,248,246,.6)",
          }}
        >
          {img.caption}
        </span>
      </div>
    ))}
  </div>
);

export const SectionDivider = ({ marginBottom = "24px" }: { marginBottom?: string }) => (
  <div
    style={{
      height: "1px",
      background: "rgba(168,131,74,.25)",
      marginBottom,
    }}
  ></div>
);

export const FeatureCardWithImage = ({
  imageId,
  imageLabel,
  title,
  description,
  imageHeight = "240px",
}: {
  imageId: string;
  imageLabel: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageHeight?: string;
}) => (
  <div>
    <ImageSlot id={imageId} defaultLabel={imageLabel} style={{ width: "100%", height: imageHeight }} />
    <div style={{ marginTop: "18px" }}>
      <span className="eyebrow">{title}</span>
      <div style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.74" }}>
        {description}
      </div>
    </div>
  </div>
);

export const PromoCard = ({
  title = "Commencez votre projet",
  highlightLine1 = "Plans 3D",
  highlightLine2 = "gratuits",
  subtitle = "Devis sous",
  subtitleHighlight = "48h",
  description = "Notre équipe vous contacte rapidement pour organiser une consultation et une étude personnalisée.",
}: {
  title?: string;
  highlightLine1?: string;
  highlightLine2?: string;
  subtitle?: string;
  subtitleHighlight?: string;
  description?: string;
}) => (
  <div style={{ border: "1px solid var(--gold)", padding: "28px 24px", textAlign: "center" }}>
    <span className="eyebrow" style={{ display: "block", marginBottom: "16px" }}>
      {title}
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
      {highlightLine1}
      <br />
      <span style={{ fontStyle: "italic", color: "var(--gold)" }}>{highlightLine2}</span>
    </div>
    <div style={{ height: "1px", background: "var(--border)", marginBottom: "16px" }}></div>
    <div style={{ fontFamily: "var(--serif)", fontSize: "21.6px", color: "var(--night)" }}>
      {subtitle} <span style={{ color: "var(--gold)" }}>{subtitleHighlight}</span>
    </div>
    <p
      style={{
        marginTop: "10px",
        fontSize: "14.4px",
        color: "var(--ink-light)",
        lineHeight: "1.6",
      }}
    >
      {description}
    </p>
  </div>
);

export const PartnerBrands = ({
  title = "Quincailleries partenaires",
  brands,
  description = "Mécanismes éprouvés sur des millions de cycles — garantie fabricant incluse.",
}: {
  title?: string;
  brands: { id: string; label: string }[];
  description?: string;
}) => (
  <>
    <span className="eyebrow">{title}</span>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${brands.length}, 1fr)`,
        gap: "16px",
        marginTop: "16px",
      }}
    >
      {brands.map((brand, i) => (
        <ImageSlot
          key={i}
          id={brand.id}
          defaultLabel={brand.label}
          style={{ width: "100%", height: "100px", background: "#F3EFE9" }}
        />
      ))}
    </div>
    {description && (
      <div
        style={{
          marginTop: "12px",
          fontSize: "13.8px",
          color: "var(--ink-light)",
          fontFamily: "var(--serif)",
          fontStyle: "italic",
        }}
      >
        {description}
      </div>
    )}
  </>
);

export const CertificationBlock = ({
  imageId,
  imageLabel,
  title,
  description,
}: {
  imageId: string;
  imageLabel: string;
  title: string;
  description: React.ReactNode;
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "130px 1fr",
      gap: "28px",
      alignItems: "center",
    }}
  >
    <ImageSlot
      id={imageId}
      defaultLabel={imageLabel}
      style={{ width: "100%", height: "120px", background: "#F3EFE9" }}
    />
    <div>
      <span className="eyebrow">{title}</span>
      <div style={{ marginTop: "10px", fontSize: "15.6px", lineHeight: "1.72" }}>
        {description}
      </div>
    </div>
  </div>
);
