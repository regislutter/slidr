var React = require('react');
var SwipeableViews = require('react-swipeable-views').default;
/* Slides */
var User = require('../components/User');
var User2 = require('../components/User2');

var UserSlider = React.createClass({
    getInitialState: function () {
        return {
            slideIndex: 0
        }
    },
    getDefaultProps: function() {
        return {
            slideStyle: {width: '100%', height: '100%'}
        }
    },
    render: function () {
        return (
            <SwipeableViews index={this.props.slide} onChangeIndex={this.props.onChangeIndex} style={this.props.slideStyle} slideStyle={this.props.slideStyle}>
                <User />
                <User2 />
            </SwipeableViews>
        )
    }
});

module.exports = UserSlider;