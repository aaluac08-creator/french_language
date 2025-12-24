'use client';

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Une erreur s'est produite</h2>
            <p className="text-text mb-4">Désolé, une erreur s'est produite lors du chargement de ce contenu.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Réessayer
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;