"use client";

import { useState, useMemo, useEffect } from "react";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  thumbnail?: string;
  video?: string;
  videoUrl?: string;
  position?: number;
}

export interface Category {
  id?: string;
  name: string;
  position?: number;
}

export function useRealisations(initialProjects: Project[] = [], initialCategories: Category[] = []) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // State for pagination
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    // Set initial count based on width once mounted
    const isMobile = window.innerWidth < 768;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setVisibleCount(isMobile ? 4 : 8);
  }, []);

  // Memoize sorted projects to avoid recalculation on every render
  const sortedProjects = useMemo(() => {
    return [...initialProjects].sort((a, b) => (a.position || 0) - (b.position || 0));
  }, [initialProjects]);

  // Prepare categories: Start with "All", then add sorted external categories
  const categories = useMemo(() => {
    const mappedCategories = initialCategories
      .sort((a, b) => (a.position || 0) - (b.position || 0))
      .map(cat => ({
        id: cat.name,
        label: cat.name
      }));

    return [{ id: "all", label: "Toutes" }, ...mappedCategories];
  }, [initialCategories]);

  // Filter and map projects (Full list)
  const allFilteredProjects = useMemo(() => {
    const filtered = activeCategory === "all"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === activeCategory);

    return filtered.map(p => ({
      ...p,
      image: p.thumbnail || p.image || "",
      video: p.videoUrl || p.video || ""
    }));
  }, [activeCategory, sortedProjects]);

  // Derived state for display
  const filteredProjects = allFilteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allFilteredProjects.length;

  const handlePlayVideo = (id: string) => {
    setPlayingVideoId(id);
  };

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setPlayingVideoId(null);
    // Reset count based on current view
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    setVisibleCount(isMobile ? 4 : 8);
  };

  const handleShowMore = () => {
    const isMobile = window.innerWidth < 768;
    const increment = isMobile ? 4 : 8;
    setVisibleCount(prev => prev + increment);
  };

  return {
    activeCategory,
    categories,
    filteredProjects,
    playingVideoId,
    hasMore,
    handlePlayVideo,
    handleCategoryChange,
    handleShowMore
  };
}
