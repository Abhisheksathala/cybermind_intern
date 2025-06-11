import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import JobContextProvider from './context/Jobcontext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
