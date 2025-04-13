import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Index from './Index.tsx'
import { ReadMe } from './sections/ReadMe.tsx'
import { Layout } from './Layout.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <StrictMode>
  <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/readMe" element={<ReadMe />} />
        </Route>
      </Routes>
  </StrictMode>
  </BrowserRouter>,
)
