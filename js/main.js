$(document).ready(function() {
    //ready
    
    //anti no-js
    
    // hide nav
    // $('#nav-list').hide();
    // $('#showNav').removeClass('ishidden');

    // SHOW NAV
    $('#showNav').click(function(e) {
        e.preventDefault();
        $('#nav-list').fadeToggle('300');
    });

    $('body').backstretch([
        "img/5.jpg"
        ], {duration: 400,fade:1300});

});
