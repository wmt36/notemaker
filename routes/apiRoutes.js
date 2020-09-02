const db = require('../db/db.js');
const clearDb = require('../db/notes.js');
const fs = require('fs');

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        res.json(db)
    });

    app.post('/api/notes', function (req, res) {
        if (db) {
            db.push(req.body)
            res.json(true)
        }
    });

    app.delete('/api/notes/:id', function (req, res) {
        let noteId = req.params.id
        db.length = 0;
        clearDb.length = 0;

        res.json({
            ok: true
        })
    });


   
};