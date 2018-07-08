function respondToChange(e){
    alert( e.originalEvent.key + ': ' + e.originalEvent.newValue);
}

$(window).on('storage', respondToChange);
