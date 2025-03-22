import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Frontend/Home/Home.jsx'));
const RegisterPage = lazy(() => import('./Frontend/Home/RegisterPage.jsx'));
const ControlPanel = lazy(() => import('./Frontend/ControlPanel/ControlPanel.jsx'));
const LoginForm = lazy(() => import('./Frontend/Home/LoginForm.jsx'));
const NotFound = lazy(() => import('./Frontend/NotFound.jsx'));

export const AppRoutes = () => (
  <Suspense fallback={<div>Cargando...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/control-panel" element={<ControlPanel />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
);