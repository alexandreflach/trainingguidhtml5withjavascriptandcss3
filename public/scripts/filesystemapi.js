/// <reference path="jquery-3.3.1.min.js" />

window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

window.requestFileSystem(TEMPORARY, 5 * 1024 * 1024, getFile, handleError);

function getFile(fileSystem){
    fileSystem.root.getFile("example.txt", { create: true}, fileOpened, handleError);
}
/* WRITE A FILE
function fileOpened(fileEntry){
    alert('File opened!');
    fileEntry.createWriter(writeToFile, handleError);
}

function writeToFile(fileWriter){
    fileWriter.onwriteend = function() { alert('Success');};
    fileWriter.onerror = function() { alert('Failed');};
    fileWriter.write(new Blob(['Hello world'], { type: 'text/plain'}));
}
*/

function fileOpened(fileEntry){
    fileEntry.file(readFile, handleError);
}

function readFile(file){
    var fileReader = new FileReader();
    fileReader.onloadend = function() { alert(this.result);};
    fileReader.onerror = function() { alert('Failed');};
    fileReader.readAsText(file);
}

function handleError(error){
    alert(error.code);
}