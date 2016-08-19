var React = require('react');
var SwipeableViews = require('react-swipeable-views').default;
/* Slides */
var Patient = require('../components/Patient');
var Patient2 = require('../components/Patient2');

var PatientSlider = React.createClass({
    getInitialState: function () {
        return {
            slideIndex: 0
        }
    },
    getDefaultProps: function() {
        return {
            slideStyle: {height: '100vh', width: '100vw'}
        }
    },
    render: function () {
        return (
            <SwipeableViews index={this.props.slide} onChangeIndex={this.props.onChangeIndex} style={this.props.slideStyle} slideStyle={this.props.slideStyle}>
                <Patient />
                <Patient2 />
            </SwipeableViews>
        )
    }
});

module.exports = PatientSlider;