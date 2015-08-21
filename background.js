
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
    var codeValues = [];
    $("code").each(function() { 
        console.log('before', $(this).text())
        // codeValues.push($(this).text());
        // withJquery(codeValues.push($(this).text()));
        var x = $.getScript();
        console.log(js_beautify)

        // var y = withJquery($(this).text)
        console.log('after', Object.keys(x), x)
    });
    // console.log(codeValues);
};

var beautyBtn = document.querySelector('.sidebarbutton');
beautyBtn.addEventListener('click', beautify);











