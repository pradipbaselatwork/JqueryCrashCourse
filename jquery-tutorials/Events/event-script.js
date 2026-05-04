$(document).ready(function () {
    // $('#btn1').click(function () {
    //    alert('Helo beta form btn 1');
    // });

    // $('#btn1').on('click', function(){
    //     alert('Hello beta from on click');
    // });

    // $('#btn1').on('click', function(){
    //    $('#para1').hide();
    // });

    // $('#btn2').on('click', function(){
    //     $('#para1').show();
    // })

    // $('#btn1').on('click', function(){
    //      $('#para1').toggle();
    // });

    // $('#btn1').dblclick('click', function(){
    //     $('#para1').toggle();
    // });

    // $('#btn1').hover(function () {
    //     $('#para1').hide();
    // });

    // $('#btn2').hover(function () {
    //     $('#para1').show();
    // })

    // $('#btn1').mouseenter(function(){
    //     $('#para1').toggle();
    // });

    // $('#btn1').mouseleave(function(){
    //     $('#para1').toggle();
    // });

    //  $('#btn1').mousemove(function(){
    //     $('#para1').toggle();
    // });

    //   $('#btn1').on('click', function(e){
    //     console.log(e)
    //     // alert(e.currentTarget.id);
    //     // alert(e.currentTarget.innerHTML);
    //     // alert(e.currentTarget.outerHTML);
    //     // alert(e.currentTarget.className);
    //     $('#rapper').append('#topRapper');
    // });

    // $("input").focus(function () {
    //     $(this).css("background-color", "red");
    // });

    // $("input").blur(function () {
    //     $(this).css("background-color", "white");
    // });

    // $('input').keyup(function (e){
    //    console.log(e.target.value)
    // });

    //     $('select').change(function (e){debugger;
    //    console.log(e.target.value)
    // });
    
    $('#testForm').submit(function (e){debugger;
        e.preventDefault();
        var fname = $('#fname').val();
        var email = $('#email').val();

        alert(email);
       console.log(fname);
    });

});

