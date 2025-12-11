import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Travel Company</h1>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center sm:px-6 lg:px-8">
        <p>&copy; 2024 Travel Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
