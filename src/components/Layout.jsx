// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="bg-slate-50 text-slate-700 antialiased">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          {children} {/* Page-specific content will be rendered here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;