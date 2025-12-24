'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Search, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const chapters = [
  { id: 1, slug: '/', title: 'Accueil', name: 'Le Voyage Linguistique' },
  { id: 2, slug: '/gaul-to-glory', title: 'De la Gaule à la Gloire', name: 'De la Gaule à la Gloire' },
  { id: 3, slug: '/gallic-ghosts', title: 'Les Fantômes du Gaulois', name: 'Les Fantômes du Gaulois' },
  { id: 4, slug: '/great-shift', title: 'La Grande Mutation Phonétique', name: 'La Grande Mutation Phonétique' },
  { id: 5, slug: '/birth-of-romance', title: 'La Naissance du Roman', name: 'La Naissance du Roman' },
  { id: 6, slug: '/old-french-grammar', title: "L'Ancien Français", name: "L'Ancien Français" },
  { id: 7, slug: '/invaders', title: 'Les Envahisseurs', name: 'Les Envahisseurs' },
  { id: 8, slug: '/great-transformation', title: 'La Grande Transformation', name: 'La Grande Transformation' },
  { id: 9, slug: '/spelling-madness', title: "L'Orthographe Devient Folle", name: "L'Orthographe Devient Folle" },
  { id: 10, slug: '/renaissance', title: 'La Révolution de la Renaissance', name: 'La Révolution de la Renaissance' },
  { id: 11, slug: '/standardization', title: "L'Âge de la Standardisation", name: "L'Âge de la Standardisation" },
  { id: 12, slug: '/reforms-1740', title: 'Les Réformes de 1740', name: 'Les Réformes de 1740' },
  { id: 13, slug: '/enlightenment', title: 'La Langue des Lumières', name: 'La Langue des Lumières' },
  { id: 14, slug: '/revolution', title: 'Révolution et Modernisation', name: 'Révolution et Modernisation' },
  { id: 15, slug: '/reform-1835', title: 'La Réforme de 1835', name: 'La Réforme de 1835' },
  { id: 16, slug: '/colonial-expansion', title: "L'Expansion Coloniale", name: "L'Expansion Coloniale" },
  { id: 17, slug: '/modern-challenge', title: 'Le Défi Moderne', name: 'Le Défi Moderne' },
  { id: 18, slug: '/modern-innovations', title: 'Les Innovations Modernes', name: 'Les Innovations Modernes' },
  { id: 19, slug: '/african-renaissance', title: 'La Renaissance Africaine', name: 'La Renaissance Africaine' },
  { id: 20, slug: '/legacy', title: "L'Héritage", name: "L'Héritage" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentChapter = chapters.find((chapter) => chapter.slug === pathname);
  const currentChapterIndex = chapters.findIndex((chapter) => chapter.slug === pathname);
  const nextChapter = currentChapterIndex < chapters.length - 1 ? chapters[currentChapterIndex + 1] : null;
  const prevChapter = currentChapterIndex > 0 ? chapters[currentChapterIndex - 1] : null;

  // Filter chapters based on search term
  const filteredChapters = chapters.filter((chapter) =>
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Accessibility improvements
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-surface"
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center text-xl font-bold font-display text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md p-1"
              aria-label="Retour à la page d'accueil"
            >
              <BookOpen className="mr-2" size={24} aria-hidden="true" />
              Voyage linguistique
            </Link>

            {/* Chapter selector dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hidden md:flex items-center text-sm text-text hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="Sélectionner un chapitre"
              >
                {currentChapter ? currentChapter.name : 'Le Voyage Linguistique'}
                <ChevronRight
                  className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`}
                  size={16}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-surface border border-surface/50 rounded-lg shadow-lg z-50"
                  role="menu"
                  aria-label="Menu des chapitres"
                >
                  {/* Search bar */}
                  <div className="p-3 border-b border-surface/50">
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted"
                        size={16}
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        placeholder="Rechercher un chapitre..."
                        className="w-full pl-10 pr-4 py-2 bg-background border border-surface/50 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Rechercher un chapitre"
                        role="searchbox"
                      />
                    </div>
                  </div>

                  {/* Chapters list */}
                  <div className="max-h-80 overflow-y-auto" role="listbox">
                    {filteredChapters.length > 0 ? (
                      filteredChapters.map((chapter) => (
                        <Link
                          key={chapter.id}
                          href={chapter.slug}
                          className={`flex items-center px-4 py-3 text-sm border-b border-surface/30 last:border-b-0 ${
                            pathname === chapter.slug
                              ? 'bg-primary/10 text-primary'
                              : 'text-text hover:bg-surface/50'
                          } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                          onClick={() => {
                            setIsDropdownOpen(false);
                            setSearchTerm('');
                          }}
                          role="option"
                          aria-selected={pathname === chapter.slug}
                        >
                          <span className="font-medium mr-2">{chapter.id}.</span>
                          <span className="truncate">{chapter.name}</span>
                          {pathname === chapter.slug && (
                            <span className="ml-auto text-xs text-primary" aria-label="chapitre actuel">actuel</span>
                          )}
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-3 text-sm text-muted" role="status">Aucun chapitre trouvé</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* Previous/Next buttons for desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {prevChapter && (
                <Link
                  href={prevChapter.slug}
                  className="flex items-center text-sm text-muted hover:text-secondary transition-colors px-3 py-1.5 rounded-md hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={`Chapitre précédent: ${prevChapter.name}`}
                >
                  ← Préc.
                </Link>
              )}

              {nextChapter && (
                <Link
                  href={nextChapter.slug}
                  className="flex items-center text-sm text-muted hover:text-accent transition-colors px-3 py-1.5 rounded-md hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={`Chapitre suivant: ${nextChapter.name}`}
                >
                  Suiv. →
                </Link>
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-text hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div className="h-1 bg-surface" role="progressbar" aria-valuenow={scrollProgress} aria-valuemin="0" aria-valuemax="100">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
            aria-hidden="true"
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-surface" role="dialog" aria-modal="true" aria-label="Menu mobile">
          <div className="container mx-auto px-4 py-4">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" size={16} aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Rechercher un chapitre..."
                  className="w-full pl-10 pr-4 py-2 bg-surface border border-surface/50 rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary/50 mb-3"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Rechercher un chapitre"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
              {filteredChapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  href={chapter.slug}
                  className={`px-3 py-2 rounded-md text-sm flex items-center ${
                    pathname === chapter.slug
                      ? 'bg-primary text-white'
                      : 'text-text hover:bg-surface'
                  } focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setSearchTerm('');
                  }}
                >
                  <span className="font-medium mr-2">{chapter.id}.</span>
                  <span className="truncate">{chapter.name}</span>
                </Link>
              ))}
            </div>

            <div className="flex justify-between mt-4 pt-4 border-t border-surface/50">
              {prevChapter && (
                <Link
                  href={prevChapter.slug}
                  className="flex items-center text-sm text-muted hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={`Chapitre précédent: ${prevChapter.name}`}
                >
                  ← Préc.
                </Link>
              )}

              {nextChapter && (
                <Link
                  href={nextChapter.slug}
                  className="flex items-center text-sm text-muted hover:text-accent transition-colors ml-auto focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label={`Chapitre suivant: ${nextChapter.name}`}
                >
                  Suiv. →
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
