import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './init';
import i18nInit from './i18n';
import reportWebVitals from './reportWebVitals';
import './scss/style.scss';
import dataStorage from './dataStorage';

const initialWebsite = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const getConfig = () => {
  i18nInit(() => fetch('/config.json')
    .then(res => res.json())
    .then(data => {
      dataStorage.config = data
      initialWebsite()
    })
    .catch(err => {
      console.log('YOLO ERROR')
    })
  )
}

getConfig()

reportWebVitals();
