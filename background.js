
$('<a href=#>Beautify</a>').addClass("sidebarbutton").insertBefore($("#sidebar"));

$('#sidebar').hide();

// $('.sidebarbutton').css({
//   "padding": "6px 12px 6px 12px",
//   "display": 'inline-block',
//   "margin": '0px 0px 5px 30px',
//   "font-size": '16px',
//   "color": 'white',
//   "font-family": 'sans-serif',
//   "text-decoration": 'none'
// });

$('.sidebarbutton').on('click', function(e){
    e.preventDefault();
    var codeValues = [];
    $("code").each(function() { 
        codeValues.push($(this).text()) 
    });
    // console.log('code',$('code'))
    // console.log(codeValues)
})

// $('#mainbar').css({"margin-left":'12%'})