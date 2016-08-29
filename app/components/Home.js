/**
 * Created by rlutter on 16-08-17.
 */

var React = require('react');
var ReactRouter = require('react-router');

var Home = React.createClass({
    handleContinue: function (route, index) {
        swal({
            title: 'Are you sure?',
            text: "It's dangerous to go alone.",
            imageUrl: 'http://zeldawiki.org/images/1/14/OldManSprite.png',
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Give me the sword!'
        }).then(function() {
            this.props.onGoTo(route, index);
        }.bind(this)).catch((ui) => {
            //console.log('cancel');
        });
    },

    render: function () {
        return (
            <div className="slide">
                <h1>Slidr demo</h1>
                <p className="lead">This project is using <abbr title="Bootstrap 4" className="initialism">BS4</abbr>: <a href="http://v4-alpha.getbootstrap.com/getting-started/introduction/" target="_blank">Check the documentation</a></p>
                <blockquote className="blockquote">
                    <p>You complete me. - Jerry Maguit, 1996</p>
                </blockquote>
                <p>Flannel sriracha artisan readymade, pour-over iPhone twee cray. Kombucha ramps listicle, lomo gluten-free forage man braid photo booth sartorial bicycle rights kogi tote bag cornhole quinoa. Crucifix banjo four loko, heirloom street art meh beard cold-pressed four dollar toast next level tousled single-origin coffee small batch ennui. Lo-fi art party retro austin, man braid banh mi salvia vinyl yuccie. Cray microdosing next level skateboard. Distillery selfies selvage messenger bag. Lo-fi blue bottle DIY mumblecore cornhole, 90's marfa fixie.</p>
                <p>Cliche organic bushwick tote bag food truck aesthetic, ethical chicharrones put a bird on it craft beer. Pabst gluten-free readymade, blog post-ironic tote bag tattooed selfies sriracha twee food truck +1 PBR&B asymmetrical. Ugh biodiesel pork belly next level chambray, narwhal fixie bitters. Street art gastropub biodiesel lomo umami. Gochujang small batch williamsburg, echo park stumptown farm-to-table helvetica wolf bicycle rights mlkshk tumblr. Pop-up humblebrag +1 marfa listicle. Williamsburg ennui fashion axe, leggings pickled readymade direct trade mlkshk distillery synth wayfarers pour-over beard keffiyeh.</p>
                <button onClick={() => this.handleContinue('/', 1)} type="button" className="btn btn-primary">Continue</button>
            </div>
        )
    }
});

module.exports = Home;