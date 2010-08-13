/*

jquery.transliterate.js -- jQuery based transliteration module

MIT license 

use me like this:

    $('input[lang=chr]').transliterate({table: 'chr.js'})
    $('#someinput').transliterate({table: 'eo.js'})


*/

(function($){

  $.fn.transliterate = function(options){

    return this.each(function(){

      var opts = $.extend({}, $.fn.transliterate.defaults, options);

      this.value = '';

      $('<input/>', 
       {
          class: opts.sourceInputClass
        })
      .insertBefore( $(this) )
      .focus()
      .keyup(function(e){
        console.log(this.value)
      })

    })

    $.fn.transliterate.defaults = { 
      // table, caseSensitive
    };

    $.fn.transliterate.convert = function(plaintext){ 
      return plaintext.toUpperCase();
    }

  }

})(jQuery)
