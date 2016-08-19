/**
 * Created by rlutter on 16-08-17.
 */

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var MainSlider = require('../containers/MainSlider');
var PatientSlider = require('../containers/PatientSlider');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={MainSlider} />
            <Route path="patient" component={PatientSlider} />
        </Route>
    </Router>
);

module.exports = routes;