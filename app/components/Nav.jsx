var React = require('react');
var {Link, IndexLink} = require('react-router');

/*var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <ul>
                    <li><IndexLink to='/' activeClassName='active'>Get Weather</IndexLink></li>
                    <li><Link to='/about' activeClassName='active'>About</Link></li>
                    <li><Link to='/examples' activeClassName='active'>Examples</Link></li>
                </ul>
            </div>
        )
    }
});*/

var Nav = (props) => {
    return (
        <div>
            <ul>
                <li><IndexLink to='/' activeClassName='active'>Get Weather</IndexLink></li>
                <li><Link to='/about' activeClassName='active'>About</Link></li>
                <li><Link to='/examples' activeClassName='active'>Examples</Link></li>
            </ul>
        </div>
    )
}

module.exports = Nav;