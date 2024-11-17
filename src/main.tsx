import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './core/styles/index.css';
import { Providers } from './core/providers/index.tsx';
import AppRouter from './core/router/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <AppRouter />
    </Providers>
  </StrictMode>
);
