var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Highett,Australia">Highett, AUS</Link>
        </li>
        <li>
          <Link to="/?location=Brisbane,Australia">Brisbane, AUS</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
