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

    getDefaultProps() {
        return {
            closeMenuOnClick: true,
        };
    },

    onSetSidebarOpen: function(open) {
        this.setState({sidebarOpen: open, shadowed: open});
    },

    // TODO Issue testing in Chrome's device mode : resize instead of making responsive
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

    handleClickMenu: function(route, index) {
        if(this.state.sidebarOpen) {
            this.props.onChangeSlide(route, index);
            this.onSetSidebarOpen(!this.props.closeMenuOnClick);
        }
    },

    render: function() {
        var sidebarContent = <div className={"sidebar"}>
            <h2>Menu</h2>
            <ul>
                <li onClick={() => this.handleClickMenu('/', 0)} className={(this.props.route == '/' && this.props.slide == 0?'active':'')}>Home</li>
                <li onClick={() => this.handleClickMenu('/', 1)} className={(this.props.route == '/' && this.props.slide == 1?'active':'')}>Safety</li>
                <li onClick={() => this.handleClickMenu('/', 2)} className={(this.props.route == '/' && this.props.slide == 2?'active':'')}>Contact</li>
                <li onClick={() => this.handleClickMenu('/', 3)} className={(this.props.route == '/' && this.props.slide == 3?'active':'')}>Safety 2</li>
                <li onClick={() => this.handleClickMenu('/user', 0)} className={(this.props.route == '/user' && this.props.slide == 0?'active':'')}>User 1</li>
                <li onClick={() => this.handleClickMenu('/user', 1)} className={(this.props.route == '/user' && this.props.slide == 1?'active':'')}>User 2</li>
            </ul>
        </div>;

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
                backgroundColor: '#406D8B',
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
                     touchHandleWidth={30}
                     dragToggleDistance={40}
                     styles={style}>
                {this.props.children}
            </Sidebar>
        );
    }
});

module.exports = MenuSidebar;