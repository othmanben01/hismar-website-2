"use client";

import React from "react";
import Image from "next/image";
import { useRealisations, Project, Category } from "@/hooks/useRealisations";
import { VideoPlayer } from "@/components/UI/VideoPlayer";
import styles from "@/app/page.module.css";

interface RealisationsGalleryProps {
  initialProjects: Project[];
  initialCategories: Category[];
}

export const RealisationsGallery: React.FC<RealisationsGalleryProps> = ({
  initialProjects,
  initialCategories,
}) => {
  const {
    activeCategory,
    categories,
    filteredProjects,
    playingVideoId,
    hasMore,
    handlePlayVideo,
    handleCategoryChange,
    handleShowMore,
  } = useRealisations(initialProjects, initialCategories);

  return (
    <div className={styles.bodyPad} style={{ marginTop: "40px" }}>
      {/* Categories Tabs */}
      {categories.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "36px",
            flexWrap: "wrap",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id!)}
              style={{
                background: "transparent",
                border: "none",
                borderBottom: activeCategory === cat.id ? "1px solid var(--gold)" : "1px solid transparent",
                padding: "8px 12px",
                color: activeCategory === cat.id ? "var(--night)" : "var(--ink-light)",
                fontFamily: "var(--mono)",
                fontSize: "11px",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
          marginBottom: "40px",
        }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {/* Media Area */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "320px",
                  cursor: project.video ? "pointer" : "default",
                  backgroundColor: "var(--night)",
                  overflow: "hidden",
                }}
                onClick={() => project.video && handlePlayVideo(project.id)}
              >
                {playingVideoId === project.id && project.video ? (
                  <VideoPlayer src={project.video} poster={project.image} />
                ) : (
                  <>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover", opacity: 0.9, transition: "opacity 0.3s" }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = "0.9")}
                      />
                    )}
                    {project.video && (
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pointerEvents: "none",
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 style={{ fontSize: "16px", color: "var(--night)", margin: "0 0 8px 0" }}>
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--ink-light)",
                    lineHeight: "1.6",
                    margin: "0 0 12px 0",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    padding: "4px 8px",
                    border: "1px solid var(--border)",
                    fontSize: "10px",
                    fontFamily: "var(--mono)",
                    letterSpacing: ".05em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  {project.category}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px 0", color: "var(--ink-light)" }}>
            Aucun projet trouvé pour le moment.
          </div>
        )}
      </div>

      {/* Show More Button */}
      {hasMore && (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleShowMore}
            style={{
              padding: "12px 32px",
              background: "transparent",
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              fontFamily: "var(--mono)",
              fontSize: "12px",
              letterSpacing: ".15em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--cream)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--gold)";
            }}
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
};
