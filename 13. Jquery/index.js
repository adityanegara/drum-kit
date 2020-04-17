alert("connected");
$("h1").css("color", "red");
$("button").css("background-color", "red")

var h1 = $("h1");
h1.css("color", "blue"); 
h1.addClass("big-title margin-50");
// h1.removeClass("big-title");
h1.text("Godd Bye"); 
$("h1").html("Godd Bye HTML");
$("img").attr("src", "https://cf.shopee.co.id/file/dc4d6ed61ef2191fe6aee64bacd6ba56"); 
$("a").attr("href", "www.yahoo.com");
$("h1").click(function (e) { 
    $("h1").css("color", "yellow");
    
});

$("button").click(function (e) { 
   $("h1").hide();
    
});

$("input").keypress(function (e) { 
   console.log(e.key);
});

$("body").keypress(function (e) { 
    $("h1").text(e.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "orange");
});

$("h1").before("<button>Before Button</button>");
$("h1").after("<button>after Button</button>");
$("h1").prepend("<button>prepend Button</button>");
$("h1").append("<button>append Button</button>");