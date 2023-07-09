import React from 'react';
import AppContainer from '@containers/AppContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ADMIN_ROUTES, USER_ROUTES } from './index';
import NotFound from '@src/components/atomics/templates/NotFound';
import { useUser } from '@src/core/store/providers/UserProvider';

export default function DefaultRouter() {
  const { isAdmin } = useUser();

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
          {isAdmin &&
            ADMIN_ROUTES.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.element />}
              />
            ))}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}
