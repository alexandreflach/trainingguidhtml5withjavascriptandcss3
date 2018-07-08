/// <reference path="jquery-3.3.1.min.js" />


// CREATE TABLE
/*
function migrateDB(transaction){
    transaction.executeSql("CREATE TABLE IF NOT EXISTS authors(" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT, " +
        "firstName TEXT, " +
        "lastName TEXT, " +
        "dateCreated TIMESTAMP DEFAULT(datetime('now', 'localtime')))");
}

function onError(error){
    alert('Error code: ' + error.code + ' Message: ' + error.message);
}

function onSuccess(){
    alert('Migration complete!');
}

var db = openDatabase('HtmlBook', '1.0', 'My library', 5 * 1024 * 1024);
db.changeVersion('1.0', '2.0', migrateDB, onError, onSuccess);

*/

// INSERIR REGISTRO
/*
var firstname = 'Fulano';
var lastName = 'Silva'

function itemInserted(transaction, results){
    alert("Id: " + results.insertId);
}

var db = openDatabase('HtmlBook', '2.0', 'My library', 5 * 1024 * 1024);

db.transaction(function(t){
    t.executeSql('INSERT INTO authors(firstName, lastName) VALUES(?, ?)', [firstname, lastName], itemInserted);
});
*/

// ATUALIZAR REGISTRO
/*
var db = openDatabase('HtmlBook', '2.0', 'My library', 5 * 1024 * 1024);
var authorId = 1;
var lastName = 'Smith';
db.transaction(function(t){
    t.executeSql("UPDATE authors SET lastName = ? WHERE id = ?", [lastName, authorId]);
});
*/

// REMOVER REGISTRO
/*
var db = openDatabase('HtmlBook', '2.0', 'My library', 5 * 1024 * 1024);
var authorId = 1;
db.transaction(function(t){
    t.executeSql("DELETE FROM authors WHERE id = ?", [authorId]);
});
*/

// LER REGISTRO
function displayResults(transaction, results){
    for (var i = 0; i < results.rows.length; i++){
        var item = results.rows.item(i);
        $('#items').append('<li>' + item.firstName + " " + item.lastName + '</li>');
    }
}
var db = openDatabase('HtmlBook', '2.0', 'My library', 5 * 1024 * 1024);
db.transaction(function(t){
    t.executeSql("SELECT * FROM authors", [], displayResults);
});