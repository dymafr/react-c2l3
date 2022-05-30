import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
const element = React.createElement('h1', null, 'Bonjour de Dyma');

root.render(element);
