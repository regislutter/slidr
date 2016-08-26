var React = require('react');
var SwipeableViews = require('react-swipeable-views').default;
/* Slides */
var ContactInfo = require('./ContactInfo');
var ContactMap = require('./ContactMap');

var Contact = React.createClass({
    propTypes: {},
    render: function () {
        return (
            <div className="slide">
                <h1>Contact</h1>
                <div className="mini-slider jumbotron">
                    <SwipeableViews>
                        <ContactInfo />
                        <ContactMap />
                    </SwipeableViews>
                </div>
            </div>
        )
    }
});

module.exports = Contact;