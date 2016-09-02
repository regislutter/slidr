var React = require('react');
var PropTypes = React.PropTypes;

function User(props) {
    return (
        <div className="slide">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Users</a></li>
                <li className="breadcrumb-item active">User 1</li>
            </ol>

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
    )
};

User.propTypes = {}

module.exports = User;