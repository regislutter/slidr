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