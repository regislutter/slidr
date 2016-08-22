var React = require('react');
var SwipeableViews = require('react-swipeable-views').default;
/* Slides */
var Home = require('../components/Home');
var Safety = require('../components/Safety');
var Contact = require('../components/Contact');

var MainSlider = React.createClass({
    getInitialState: function () {
        return {
            slideIndex: 0
        }
    },
    getDefaultProps: function() {
        return {
            slideStyle: {width: '100vw', height: '100%'}
        }
    },
    render: function () {
        return (
            <SwipeableViews index={this.props.slide} onChangeIndex={this.props.onChangeIndex} style={this.props.slideStyle} slideStyle={this.props.slideStyle}>
                <Home />
                <Safety />
                <Contact />
            </SwipeableViews>
        )
    }
});

module.exports = MainSlider;