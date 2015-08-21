
$("#hmenus").append('<a href=# class="sidebarbutton">Beautify</a>');
$('#sidebar').hide();

$('.sidebarbutton').css({
    'padding': '5px 12px 5px 12px', 
    'font-size': '16px', 
    'color': 'white', 
    'font-family': 'sans-serif', 
    'background-color': '#40E0D0',
    'text-decoration': 'none'
});

var beautify = function(){
    var soBeauty = [];
    $("code").each(function() { 
        $(this).text(function(){
            return js_beautify($(this).text(), {indent_size: 6})
        });
    });
};

var beautyBtn = document.querySelector('.sidebarbutton');
beautyBtn.addEventListener('click', beautify);

