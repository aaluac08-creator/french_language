'use client';

import React from 'react';

const SkipNavLink = () => {
  return (
    <a
      href="#main-content"
      onClick={(e) => {
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
          mainContent.focus();
        }
      }}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipNavLink;
