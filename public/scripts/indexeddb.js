/// <reference path="jquery-3.3.1.min.js" />

var indexedDB = window.indexedDB;
var openRequest = indexedDB.open('Library', 5);
var db;

openRequest.onsuccess = function(response){
    db = openRequest.result;
}

openRequest.onerror = function(response){
    alert("Error code: " + response.target.errorCode);
}

/*
openRequest.onupgradeneeded = function(response){
    response.currentTarget.result.createObjectStore("authors",
    { keypath: 'id', autoIncrement: true });
}
*/

/*
openRequest.onupgradeneeded = function(response){
    var store = response.currentTarget.transaction.objectStore("authors");
    store.createIndex('lastName', 'lastName', { unique: false }); 
}
*/
/*
openRequest.onupgradeneeded = function(response){
    var store = response.currentTarget.transaction.objectStore("authors");
    store.deleteIndex('lastName'); 
}
*/

openRequest.onupgradeneeded = function(response){
    response.currentTarget.result.deleteObjectStore("authors");
}