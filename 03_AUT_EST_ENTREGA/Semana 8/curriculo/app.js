const express = require('express');
const app = express();
const path = require('path')
const hostname = "127.0.0.1";
const port = 8080;
const sqlite3 = require('sqlite3').verbose();
const DBPATH = path.join(__dirname, 'tablecurriculo.db');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static(__dirname));
app.use(express.json());
/* Definição dos endpoints */
/****** CRUD ******************************************************************/
// Retorna todos registros (é o R do CRUD - Read)
app.get('/data', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM skills';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});
// Insere um registro (é o C do CRUD - Create)
app.post('/insert', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = `INSERT INTO tablecurriculo (skills) VALUES ('${req.body.skills}')`;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
    });
    db.close(); // Fecha o banco
    res.end();
});
// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});
// Exclui um registro (é o D do CRUD - Delete)
app.post('/skillsdelete/:id', urlencodedParser, (req, res) => {
    let id = req.params['id']
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS
    sql = "DELETE FROM skills WHERE id = ?";
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [id],  err => {
        if (err) {
            throw err;
        }
        else{
            res.redirect("");
        }
    });
    db.close(); // Fecha o banco
});
/* Inicia o servidor */
app.listen(port, () => {
    console.log(`Server running on http://${hostname}:${port}/`);
});