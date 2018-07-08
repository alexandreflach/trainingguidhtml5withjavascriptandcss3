
$(document).ready(function(){
    $('#btnAdd').on('click', addNumbers);

    console.log(abdAsync());
});

function addNumbers(evt){
    console.log(evt);
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x" : x, "y": y};
    $.ajax({
        url: '/addition',
        data: data,
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function (data){
            $('#result').html(data.result);
        }
    })
}

function timeoutAsync(milliseconds){
    var deferred = $.Deferred();
    setTimeout(() => {
        deferred.resolve();
    }, milliseconds);
    return deferred.promise();
}

function abdAsync(){
    var promise = timeoutAsync(2000);
    promise.done(function(){
        alert('done!');
    });
    return promise;
}