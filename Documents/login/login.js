// var btnLogin = document.getElementsByClassName('btn-login')[0];
var username = document.getElementsByClassName('form-control')[0];
// btnLogin.addEventListener('click', function() {
//     username.focus()

//   });
// var loading = function() {
//     alert('Loading');
// }
// var show = document.getElementsByClassName('check')[0];
// username.addEventListener('keyup', function(e) {
//    var textLength = this.value.length;
//    console.log('length',textLength);
//    var usError = '';
//    if(textLength <= 4) {
//        usError = 'So weak';
//    }  
//    else if ( textLength > 4 && textLength < 8) {
//        usError = 'Normal';
//    }
//    else { 
//        usError = 'So Strong'; 
//     }
//    show.innerHTML = usError;
    
// });
$(document).ready(function() {
    var btnLogin = $('.btn-login');
    var username = $('#username');
    var pTag = $('p');
    var formContainer = $('.form-container');
    formContainer.on('click', '.btn-login', function() {
        $(this).html('INSAL');
    });
    var formContainer = $('.form-container');
    formContainer.on('keyup', '.form-control', function() {
        var textLength = $(this).val().length;
        console.log('length',textLength);
        var usError = '';
        if(textLength <= 4) {
            usError = 'So weak';
        }  
        else if ( textLength > 4 && textLength < 8) {
            usError = 'Normal';
        }
        else { 
            usError = 'So Strong'; 
         }
        $('.check').html(usError );
    })
    
    // btnLogin.click(function(){
    //     $(this).html('INSAL');
    //    // $(this).val('INSAL');// dùng type
    // });
});