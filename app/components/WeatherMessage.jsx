var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function () {
//         var {location, temp} = this.props;

//         return (
//             <h4>The temperature in {location} is {temp}</h4>
//         )
//     }
// })

var WeatherMessage = ({location, temp}) => {
    return (
        <h4>The temperature in {location} is {temp}</h4>
    )  
}

module.exports = WeatherMessage;