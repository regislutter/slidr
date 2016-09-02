var React = require('react');
var PropTypes = React.PropTypes;

function User2(props) {
    return (
        <div className="slide">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Users</a></li>
                <li className="breadcrumb-item active">User 2</li>
            </ol>

            <div className="text-xs-center" id="example-caption-4">Reticulating splines&hellip; 72%</div>
            <progress className="progress" value="72" max="100" aria-describedby="example-caption-4"></progress>

            <ul className="list-group">
                <li className="list-group-item">
                    <span className="tag tag-default tag-pill pull-xs-right">14</span>
                    Cras justo odio
                </li>
                <li className="list-group-item">
                    <span className="tag tag-default tag-pill pull-xs-right">2</span>
                    Dapibus ac facilisis in
                </li>
                <li className="list-group-item">
                    <span className="tag tag-default tag-pill pull-xs-right">1</span>
                    Morbi leo risus
                </li>
            </ul>
        </div>
    )
};

User2.propTypes = {}

module.exports = User2;