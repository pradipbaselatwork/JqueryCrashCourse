
$(document).ready(function () {
    $('#btnFadeOut').click(function () {
    //    alert('Helo beta form btn 1');
    //    $('#boxFadeOut').fadeOut('fast');
    //    $('#boxFadeOut').fadeOut('slow');
    //    $('#boxFadeOut').fadeOut(3000, function(){
    //     //   $('#btnFadeOut').text('Its gone black rain');
    //    });
    });

    // $('#btnFadeIn').click(function () {debugger;
    // //    alert('Helo beta form btn 1');
    // //    $('#boxFadeOut').fadeOut('fast');
    // //    $('#boxFadeOut').fadeOut('slow');
    // //    $('#boxFadeIn').fadeIn();
    // });

     $("#btnFadeStart").click(function () {
        $("#boxFadeStop").slideDown(5000);
    });

    $("#btnFadeStop").click(function () {
        $("#boxFadeStop").stop();
    });
});

