/*

jquery.transliterate.js -- jQuery based transliteration module

MIT license 

use me like this:

    $('input[lang=chr]').transliterate({tableFile: 'chr.js'})


*/

(function($){

  $.fn.transliterate = function(options){

    return this.each(function(){

      var opts = $.extend({}, $.fn.transliterate.defaults, options);

      $('<input/>', {
        class: opts.sourceInputClass,
        //placeholder: 'type here...'
      })
      .insertBefore( $(this) )
      .focus()

    })

    $.fn.transliterate.defaults = { 
      // table, caseSensitive
    };

  }

})(jQuery)
