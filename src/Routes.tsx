import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, RegisterPage, CartPage } from './features/Auth/pages';
import { Header, Footer } from './components/components';
import { isAuthenticated } from './services/helpers/auth';

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
}> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
  />
);

const PublicRoute: React.FC<{
  component: React.FC;
  path: string;
}> = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    element={
      isAuthenticated() ? (
        <Navigate to="/" />
      ) : (
        <div>
          <Header />
          <Component />
          <Footer />
        </div>
      )
    }
  />
);

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <PublicRoute path="/login" component={LoginPage} />
      <PublicRoute path="/register" component={RegisterPage} />
      <PrivateRoute path="/cart" component={CartPage} />
      <Route path="*" element={<Navigate to="/cart" />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
