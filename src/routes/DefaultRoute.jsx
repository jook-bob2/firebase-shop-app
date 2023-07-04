import React from 'react';
import AppContainer from '@containers/AppContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ADMIN_ROUTES, USER_ROUTES } from './index';

export default function DefaultRouter() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          {USER_ROUTES.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}
          {ADMIN_ROUTES.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}
