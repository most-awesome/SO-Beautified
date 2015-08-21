function withJQuery(f) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = '(' + f.toString() + ')(jQuery)';
    document.body.appendChild(script);
};

withJQuery(function($) {
    var jsb_opts = {
        indent_size: 4,
        indent_char: ' ',
        preserve_newlines: true,
        preserve_max_newlines: 2,
        jslint_happy: false,
        brace_style: 'collapse',
        space_before_conditional: false
    };

    $.getScript('https://raw.github.com/einars/js-beautify/master/js/lib/beautify.js', function() {
        $(document).on('keydown', '.wmd-input', function(e) {
            if(!(e.ctrlKey && e.shiftKey && e.which == 66)) return; // ctrl-shift-b

            e.preventDefault();
            var $this = $(this),
                val = $this.val(),
                sel = val.substring(this.selectionStart, this.selectionEnd);
            
            if(!sel) return; //nothing to do

            var matches = /^([\r\n]*)(?:[ \t])*((?:.|\r|\n)*?)([\r\n]*)$/.exec(sel); // leading newlines, string without first-line indentation, trailing newlines
            var code_indent = '    '; // 4 spaces
            sel = matches[1] + js_beautify(code_indent + matches[2], jsb_opts) + matches[3];
            $this.val(val.substr(0, this.selectionStart) + sel + val.substr(this.selectionEnd));
        });
    });
});