// src/components/layout/MainLayout/MainLayout.tsx
import Navbar from '../Navbar/Navbar'; 
import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;