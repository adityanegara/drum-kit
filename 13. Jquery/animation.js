$(".hide-h1").click(function (e) { 
    $("h1").hide();
});

$(".toggle-h1").click(function (e) { 
    $("h1").toggle();
    
});

$(".fadeOut-h1").click(function (e) { 
    $("h1").fadeOut();
    $("h1").fadeIn();
});

$(".fadeOut-h1").click(function (e) { 
    $("h1").fadeOut();
    $("h1").fadeIn();
});

$(".slide-h1").click(function (e) { 
    $("h1").slideDown();
    $("h1").slideUp();
});


$(".css-h1").click(function (e) { 
    $("h1").animate({opacity : 0.5, margin : "20%"}, 10000);
});

$(".multiple-h1").click(function (e) { 
    $("h1").slideUp().fadeIn().animate({opacity : 0.5 });
});
