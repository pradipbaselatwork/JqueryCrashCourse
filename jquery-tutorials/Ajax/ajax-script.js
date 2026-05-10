$(document).ready(function () {
    // $('#header3').load('message.html');
    // $('h1').load('message.html');
    // $('#btn1').click(function () {
    //     $('#messagehtml').load('message.html');
    // });

    // $('#btn1').click(function () {debugger;
    //     // $('#getMessageHtml').load('message.html', function (response, status, xhr) {debugger;
    //     //     if (status == "error") {
    //     //         alert("Error: " + xhr.status + " " + xhr.statusText);
    //     //     }
    //     // });

    //     $.get('message.html'), function (data){debugger;
    //         $('#getMessageHtml').html(data);
    //     }

    // });

    //     $('#btn1').click(function () {debugger;
    //     $.get('message.html', function (data) {debugger;
    //         $('#getMessageHtml').html(data);
    //     });
    // });

    //     $('#btn1').click(function () {
    // $.get('message.html', function (data, response) {debugger;
    //     if(response == 'success'){debugger;
    //         alert('success helo ');
    //     }else if(data == 'error'){debugger;
    //         alert('error beta');
    //     }
    //     // $('#getMessageHtml').html(data);
    // });
    // });

    // $('#btn1').click(function () {
    //     $.get('ajax-test', function (data) {
    //         debugger;
    //         $('#helloPradip').html(data); debugger;
    //     });
    // });
    
    $('#postForm').submit(function(e){debugger;
        e.preventDefault();

        var title = $('#title').val();
        var body = $('#body').val();
        var email = $('#email').val();

        var url = $(this).attr('action');

        $.post(url, {title:title, body:body, email:email})
            .done(function (data) {
            console.log('Post form saved success');debugger;
            console.log(data);
        });

    });
});