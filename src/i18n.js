import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import dataStorage from './dataStorage'

const lastLang = localStorage.getItem('lastLang') || 'en'
dataStorage.lang = lastLang

const initial = (cb) => {
    i18n
        .use(ChainedBackend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            lng: lastLang,
            fallbackLng: 'en',
            debug: true,
            interpolation: {
                escapeValue: false // not needed for react!!
            },
            react: {
                wait: true
                // useSuspense: false
            },
            backend: {
                backends: [Backend],
                backendOptions: [
                    {
                        loadPath: '/lang/{{lng}}.json?' + new Date().getTime()
                    }
                ]
            }
        })
        .then(t => {
            console.log('YOLO i18n init then')
            dataStorage.translate = t
            cb && cb()
        });
    i18n.on('initialized', (t) => {
        console.info('YOLO i18n initialized')
    })
    i18n.on('loaded', () => console.info('YOLO i18n loaded'))
    i18n.on('failedLoading', () => console.info('YOLO i18n failedLoading'))
}
export default initial;
