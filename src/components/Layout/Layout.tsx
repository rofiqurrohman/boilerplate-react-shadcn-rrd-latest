import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div>
        <Header />

        <main className='p-4 lg:p-6 '>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
