var React = require('react');
var ReactDOM = require('react-dom');
var Sidebar = require('react-sidebar').default;

var MenuSidebar = React.createClass({
    getInitialState() {
        return {
            sidebarOpen: false,
            sidebarDocked: false,
            shadowed: false,
        };
    },

    onSetSidebarOpen: function(open) {
        this.setState({sidebarOpen: open, shadowed: open});
    },

    // Issue testing in Chrome - Device mode resize instead of making responsive
    //componentWillMount: function() {
    //    var mql = window.matchMedia("(min-width: 800px)");
    //    console.log(mql.matches);
    //    mql.addListener(this.mediaQueryChanged);
    //    this.setState({mql: mql, sidebarDocked: mql.matches});
    //},
    //
    //componentWillUnmount: function() {
    //    this.state.mql.removeListener(this.mediaQueryChanged);
    //},
    //
    //mediaQueryChanged: function() {
    //    this.setState({sidebarDocked: this.state.mql.matches});
    //},

    render: function() {
        var sidebarContent = <div>Sidebar content</div>;

        var style = {
            root: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
            },
            sidebar: {
                zIndex: 2,
                position: 'absolute',
                top: 0,
                bottom: 0,
                transition: 'transform .3s ease-out',
                WebkitTransition: '-webkit-transform .3s ease-out',
                willChange: 'transform',
                overflowY: 'auto',
                backgroundColor: '#FFF',
            },
            content: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                overflow: 'hidden',
                transition: 'left .3s ease-out, right .3s ease-out',
            },
            overlay: {
                zIndex: 1,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0,
                visibility: 'hidden',
                transition: 'opacity .3s ease-out',
                backgroundColor: 'rgba(0,0,0,.3)',
            },
            dragHandle: {
                zIndex: 1,
                position: 'fixed',
                top: 0,
                bottom: 0,
            },
        };

        return (
            <Sidebar sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     docked={this.state.sidebarDocked}
                     onSetOpen={this.onSetSidebarOpen}
                     shadow={this.state.shadowed}
                     styles={style}>
                {this.props.children}
            </Sidebar>
        );
    }
});

module.exports = MenuSidebar;