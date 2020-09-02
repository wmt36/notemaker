//linking a path with a dependency
const path = require('path');




//creating the routes needed to link the pages

module.exports = function(app) {


    app.get('/',  function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });


    app.get('/notes',  function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });


};

