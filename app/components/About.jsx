var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a simple single page weather application. It's built with React.js
         and uses the Open Weather Map API. </p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li><a href="https://facebook.github.io/react/">React.JS</a></li>
        <li><a href="https://openweathermap.org/">Open Weather Map API</a></li>
      </ul>
    </div>
  )
};

module.exports = About;
