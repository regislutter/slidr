var React = require('react');
var SwipeableViews = require('react-swipeable-views').default;
/* Slides */
var ContactInfo = require('./ContactInfo');
var ContactMap = require('./ContactMap');

var Contact = React.createClass({
    propTypes: {},
    handleSwitching: function (index, type) {
        console.log('handleSwitching: ', index, type);

    },
    render: function () {
        return (
            <div className="slide">
                <h1>Contact</h1>
                <div className="mini-slider">
                    <SwipeableViews onSwitching={this.handleSwitching}>
                        <ContactInfo />
                        <ContactMap />
                    </SwipeableViews>
                </div>
            </div>
        )
    }
});

module.exports = Contact;