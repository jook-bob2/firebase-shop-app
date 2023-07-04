import React from 'react';
import AdmLayout from '@src/components/atomics/templates/layouts/AdmLayout';
import MainLayout from '@src/components/atomics/templates/layouts/UserLayout';

export default function AppContainer({ children }) {
  const isAdmin = false;

  return (
    <>
      {isAdmin ? (
        <AdmLayout>{children}</AdmLayout>
      ) : (
        <MainLayout>{children}</MainLayout>
      )}
    </>
  );
}
