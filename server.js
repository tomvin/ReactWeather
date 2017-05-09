var express = require('express');

// Create the app
var app = express();
const PORT = process.env.PORT || 3000;

// For open weather API. Free version doesn't allow https only http. 
app.use(function (req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        response.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server running on port ' + PORT);
});
