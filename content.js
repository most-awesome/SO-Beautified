// console.log('you\'r in the world of content.js');

/* Listen for messages */
// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     /* If the received message has the expected format... */
//     if (msg.text && (msg.text == "report_back")) {
//         /* Call the specified callback, passing 
//            the web-pages DOM content as argument */
//     sendResponse(document.getElementById("mybutton").innerHTML);
//     }
// });

// $.getScript('https://raw.github.com/einars/js-beautify/master/js/lib/beautify.js', function() {
//     $(document).on('keydown', '.wmd-input', function(e) {
//         if(!(e.ctrlKey && e.shiftKey && e.which == 66)) { // ctrl-shift-b
//             return;
//         }
//         e.preventDefault();
//         var $this = $(this),
//             val = $this.val(),
//             sel = val.substring(this.selectionStart, this.selectionEnd);
//         if(!sel) { // nothing to do
//             return;
//         }
//         var matches = /^([\r\n]*)(?:[ \t])*((?:.|\r|\n)*?)([\r\n]*)$/.exec(sel); // leading newlines, string without first-line indentation, trailing newlines
//         var code_indent = '    '; // 4 spaces
//         sel = matches[1] + js_beautify(code_indent + matches[2], jsb_opts) + matches[3];
//         $this.val(val.substr(0, this.selectionStart) + sel + val.substr(this.selectionEnd));
//     });
// });

console.log('SO beaitufl!!!')

$('.checkPage').click(function(x){
    console.log($('.default.prettyprint.prettyprinted').val())
    console.log($('.default.prettyprint.prettyprinted').text())
    console.log($('.default.prettyprint.prettyprinted').html())
    console.log($('.default').val())
    console.log($('.prettyprint').val())
    console.log($('.prettyprinted').val())
    console.log($('.default').text())
    console.log($('.prettyprint').text())
    console.log($('.prettyprinted').text())
    console.log($('.default').html())
    console.log($('.prettyprint').html())
    console.log($('.prettyprinted').html())
})
