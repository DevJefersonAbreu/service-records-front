import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe de 'react-dom/client'
import App from './App';

// Crie a raiz da aplicação
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Renderize a aplicação
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);