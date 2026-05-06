$(document).ready(function () {
    // $('#btn1').click(function () {
    //    alert('Helo beta form btn 1');
    // });
    //    $('#para1').css('color','red');

    // $('#btn1').on('click', function(){
    // //    $('#para1').css('color','red');
    // //    $('#myDiv').text('Hello world');
    // //    $('#myDiv').html('<h3>Hello world</h3>');
    // //    alert($('#myDiv').text());

    // //    $('ul').append('<li>This is append Item 5</li>');
    // //    $('ul').prepend('<li>This is Prepend Item 0</li>');
    // //    $('#para1').appendTo('#para2');
    // //    $('#para1').prependTo('#para2');
    // //   $('para2').empty();

    // // $('a').attr('target','_blank');
    // //   alert($('a').attr('href'));
    // // $('a').removeAttr('target');
    // //    $('#myspan').attr('span');
    // //    $('p').wrapAll('h2');
    // });

    // $('#newItem').keyup(function(e){debugger;
    //    var code =e.which;
    //    if(code ==10){
    //     e.preventDefault();
    //     $('ul').append('<li>'+e.target.value+'</li>')
          
    //    }
    // });


});

$(document).ready(function () {

    $('#newItem').keyup(function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            $('ul').append('<li>' + e.target.value + '</li>');
            e.target.value = ''; // clear input
        }
    });

});

