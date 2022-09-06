import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App />, document.querySelector('#root'));

/* Les imports à effectuer pour n'avoir aucune erreur 
import React from 'react';
import { createRoot } from 'react-dom/client';


   Les constantes à définir 
const root = createRoot(document.getElementById('root'));
root.render(<App />); */