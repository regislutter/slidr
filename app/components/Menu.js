var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var Menu = React.createClass({
    propTypes: {
        onClickMenu: PropTypes.func.isRequired
    },
    getDefaultProps: function() {
        return {
            route: '/',
            slide: 0
        }
    },
    handleClick: function (e) {
        this.props.onClickMenu(e.target.dataset.route, parseInt(e.target.dataset.index));
    },
    render: function () {
        return (
            <header className={this.props.orientation}>
                <div className={"flex-container " + this.props.orientation}>
                    <h1 className="logo">Slidr</h1>
                    <div data-route="/" data-index="0" onClick={this.handleClick} className={"btn " + (this.props.route == '/' && this.props.slide == 0?'active':'')}>Home</div>
                    <div data-route="/" data-index="1" onClick={this.handleClick} className={"btn " + (this.props.route == '/' && this.props.slide == 1?'active':'')}>Safety</div>
                    <div data-route="/" data-index="2" onClick={this.handleClick} className={"btn " + (this.props.route == '/' && this.props.slide == 2?'active':'')}>Contact</div>
                    <div data-route="/user" data-index="0" onClick={this.handleClick} className={"btn " + (this.props.route == '/user'?'active':'')}>Users</div>
                </div>
            </header>
        )
    }
});

module.exports = Menu;