//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/person-crud-frontend'));
 
app.get('/*', function(req,res) {
 
res.sendFile(path.join(__dirname+'/dist/person-crud-frontend/index.html'));
});
 
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);




// const express = require('express');

// const app = express();

// app.use(express.static('./dist/pokedex'));

// app.get('/*', function (req, res) {
//     res.sendFile('index.html', { root: 'dist/pokedex' });
// });

// app.listen(process.env.PORT || 8080);

// console.log(`Running on port ${process.env.PORT || 8080}`);