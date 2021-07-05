import dataStorage from './dataStorage'

const cssId = 'myCss';
const lastTheme = localStorage.getItem('lastTheme') || 'light'
const lastSize = localStorage.getItem('lastFontSize') || 'medium'
document.body.classList.add(lastSize)
document.body.classList.add(lastTheme)
dataStorage.theme = lastTheme
dataStorage.fontSie = lastSize
if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `/theme/${lastTheme}.css`;
    link.media = 'all';
    head.appendChild(link);
}