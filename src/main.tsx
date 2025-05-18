import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import Index from './Index';
import { Todo } from './sections/Todo';
import { Layout } from './Layout';
import { OtherPage } from './OtherPage';
import { LearnTSPage } from './LearnTSPage';
import { NavigationPage } from './NavigationPage';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/Navigation" element={<NavigationPage />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/TS" element={<LearnTSPage />} />
          <Route path="/readMe" element={<Todo />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
