'use strict';

var counterpart = require('counterpart');
var React       = require('react');
var Translate   = require('react-translate-component');

var LocaleSwitcher = React.createClass({
    handleChange: function(e) {
        var lang = e.target.value;
        counterpart.setLocale(lang);
        localStorage.setItem('lang', lang);
    },

    componentWillMount: function() {
        var lang = localStorage.getItem('lang');
        if(lang === null || lang === undefined || (lang != 'en' && lang != 'fr')) {
            lang = 'en';
        }
        counterpart.setLocale(lang);
    },

    render: function() {
        return (
            <p>
                <span>Switch Locale:</span>

                <select defaultValue={counterpart.getLocale()} onChange={this.handleChange}>
                    <option>en</option>
                    <option>fr</option>
                </select>
            </p>
        );
    }
});
module.exports = LocaleSwitcher;

// Translations
var localeEn = require('../locale-data/en.js');
var localeFr = require('../locale-data/fr.js');

counterpart.registerTranslations('en', localeEn);
counterpart.registerTranslations('fr', localeFr);