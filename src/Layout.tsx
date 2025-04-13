import React, { FC } from 'react';
import { Outlet } from 'react-router';
import { BottomNav } from './BottomNav';

export const Layout: FC = () => {
  return (
    <div>
      <Outlet />
      <BottomNav />
    </div>
  );
};
