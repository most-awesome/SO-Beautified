
// $('<a href=#>Beautify</a>').addClass("sidebarbutton").insertBefore($("#sidebar"));
$("#hmenus").append('<a href=# class="sidebarbutton">Beautify</a>');

$('#sidebar').hide();

$('.sidebarbutton').css({
    "padding": "5px 12px 5px 12px", 
    "font-size": "16px", 
    "color": "white", 
    "font-family": "sans-serif", 
    "background-color": "#40E0D0",
    "text-decoration": "none"
})

$('#sidebar').hide();
$('#mainbar').css({marginLeft: "12%"});


var func = function(){
    console.log('haaaaaa')
    var codeValues = [];
    $("code").each(function() { 
        codeValues.push($(this).text()) 
    });
}

var plusBtn = document.querySelector('.sidebarbutton');
plusBtn.addEventListener('click', func);




