(function($) {

    $.fn.selectfilter = function(opts) {
        var options = $.extend({}, defaults, opts);

        $(this).autocomplete(options).on('click', function(event) {
            var $me = $(this);
            $me.autocomplete("search", $me.val());
        });
    };

    var defaults = {
        minLength: 0,
        minChars: 0,
        max: 12,
        autoFill: true,
        mustMatch: true,
        matchContains: false
    };

})(jQuery);