/// <reference path="jquery-3.3.1.min.js" />

var $draggedItem;

$(document).ready(function(){
    $('.item').on('dragstart', dragging);
    $('.item').on('dragend', draggingEnded);
    $('.hole').on('dragenter', preventDefault);
    $('.hole').on('dragover', preventDefault);
    $('.hole').on('drop', dropItem);
});

function dragging(e) {
    $(e.target).addClass('dragging');
    $draggedItem = $(e.target);
}

function draggingEnded(e){
    $(e.target).removeClass('dragging');
}

function preventDefault(e){
    e.preventDefault();
}

function dropItem(e){
    var hole = $(e.target);
    if ( hole.hasClass('hole') && hole.children().length == 0){
        $draggedItem.detach();
        $draggedItem.appendTo($(e.target));
    }
}