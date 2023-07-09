import React from 'react';
import MainLayout from '@src/components/atomics/templates/layouts/UserLayout';

export default function AppContainer({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
