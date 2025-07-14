import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Header: React.FC = () => {
  return (
    <header className='bg-background border-b h-16 flex items-center gap-4 px-4 lg:px-6'>
      <NavLink to='/' className={({ isActive }) => cn('text-sm', isActive ? 'text-blue-500' : 'text-gray-400')}>
        Home
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => cn('text-sm', isActive ? 'text-blue-500' : 'text-gray-400')}>
        About
      </NavLink>
    </header>
  );
};
