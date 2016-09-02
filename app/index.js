/**
 * Created by rlutter on 16-08-16.
 */

/*
 FIRST
 -----
 Focused
 Independent
 Reusable
 Small
 Testable
 */

var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
//var Raven = require('raven-js');

// I18N formats
//var areIntlLocalesSupported = require('intl-locales-supported');
//var localesMyAppSupports = [
//    'en', 'fr'
//];
//if (global.Intl) {
//    // Determine if the built-in `Intl` has the locale data we need.
//    if (!areIntlLocalesSupported(localesMyAppSupports)) {
//        // `Intl` exists, but it doesn't have the data we need, so load the
//        // polyfill and patch the constructors we need with the polyfill's.
//        var IntlPolyfill    = require('intl');
//        Intl.NumberFormat   = IntlPolyfill.NumberFormat;
//        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
//    }
//} else {
//    // No `Intl`, so use and load the polyfill.
//    global.Intl = require('intl');
//}
//
//var {addLocaleData} = require('react-intl');
//var en = require('./locale-data/en');
//var fr = require('./locale-data/fr');
//addLocaleData([en, fr]);

// Sentry debug
//var sentryKey = 'dd75bf29b58544298633af488163459f';
//var sentryApp = '92669';
//var sentryURL = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;
//
//var _APP_INFO = {
//    name: 'Slidr',
//    branch: '1',
//    version: '1.0'
//}

ReactDOM.render(
    routes,
    document.getElementById('app')
);