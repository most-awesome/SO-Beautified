

$('<a href=#>Beautify </a>').addClass("sidebarbutton").insertBefore($("#sidebar"));

// $('.sidebarbutton').hover(function(){
//  $('.sidebarbutton').css("background-color", "#ff8700")},
//  function(){
//  $('.sidebarbutton').css("background-color", "#777")
//  }
// })
// 



$('.sidebarbutton').hover(function() {
    $( this ).css( "background-color", "#ff8700" );
  }, function() {
    $( this ).css( "background-color", "#777" );
  }
);

$('.sidebarbutton').css({
    "padding": "6px 12px 6px 12px", 
    "display": "inline-block", 
    "margin": "0px 0px 5px 30px", 
    "font-size": "16px", 
    "color": "white", 
    "font-family": "sans-serif", 
    "background-color": "#777", 
    "text-decoration": "none"})

$('#sidebar').hide();
$('#mainbar').css({marginLeft: "12%"});


$(".sidebarbutton").on("click", function(e){
    e.preventDefault();
    var codeValues = [];
    $("code").each(function() { codeValues.push($(this).text()) });

    console.log(codeValues)
})