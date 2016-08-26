var React = require('react');
var PropTypes = React.PropTypes;

function ContactInfo(props) {
    return (
        <div className="slide">
            <h2>Informations</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <img className="card-img-top" src="https://pbs.twimg.com/profile_images/481917089234444288/fy_HKoB7.jpeg" alt="Card image cap" />
                        <div className="card-block">
                            <h4 className="card-title">Régis Lutter</h4>
                            <p className="card-text">Geek & more</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Web Developer</li>
                            <li className="list-group-item">Collector</li>
                            <li className="list-group-item">Geek</li>
                        </ul>
                        <div className="card-block">
                            <a href="http://github.com/zetura" className="card-link">Github</a>
                            <a href="http://zetura.fr" className="card-link">Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

ContactInfo.propTypes = {}

module.exports = ContactInfo;