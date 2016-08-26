/**
 * Created by rlutter on 16-08-17.
 */

var React = require('react');
var Menu = require('./Menu');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('bootstrap-loader');
require("../assets/sass/styles.scss");

var Main = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            route: this.props.location.pathname,
            slideIndex: 0,
            orientation: 'orientation-column' // orientation-column OR orientation-row
        }
    },
    handleClickMenu: function(route, index) {
        if(route !== this.state.route) {
            this.context.router.push(route);
        }
        this.setState({
            route: route,
            slideIndex: index
        });
    },
    handleChangeIndex: function(index, fromIndex) {
        this.setState({
            slideIndex: index
        });
    },
    render: function () {
        var path = this.props.location.pathname;
        var segment = path.split('/')[1] || 'root';
        return (
            <div className={"main-container " + this.state.orientation}>
                <Menu route={this.state.route} slide={this.state.slideIndex} orientation={this.state.orientation} onClickMenu={this.handleClickMenu} />
                <ReactCSSTransitionGroup
                    transitionName="appear"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500} >
                    {React.cloneElement(this.props.children, {key: segment, slide: this.state.slideIndex, onChangeIndex: this.handleChangeIndex, onChangeSlide: this.handleClickMenu, slideStyle: (this.state.orientation == 'orientation-row'?{height: '100vh'}:{width: '100vw', height: '100%'})})}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = Main;