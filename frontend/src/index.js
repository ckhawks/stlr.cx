import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

// geist
import { GeistProvider, CssBaseline } from '@geist-ui/react';

// requests https://swr.vercel.app/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeistProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
