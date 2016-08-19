/**
 * Created by rlutter on 16-08-17.
 */

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function () {
        return (
            <div className="slide">
                <h1>Github Battle</h1>
                <p className="lead">Hey!</p>
                <Link to="/playerOne">
                    <button type="button" className="btn">Get started</button>
                </Link>
            </div>
        )
    }
});

module.exports = Home;