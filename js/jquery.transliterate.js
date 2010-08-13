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

      $target = $(this);
      $target.val('');

      //$source = $('<input/>', 
      $source = $target.clone();
      $source.addClass(opts.sourceInputClass);

      $source
        .insertBefore( $target )
        .focus()
        .bind('keyup blur change', function(e){
          $(this).next().val($.fn.transliterate.convert($(this).val(), opts.table));
        })

    })
  }

  $.fn.transliterate.defaults = { 
    // table, caseSensitive
  };



  $.fn.transliterate.convert = function(plaintext, table){ 
    var converted = '';
    $.each(table, function(i, [before, after]){
      var pattern = new RegExp(before, 'gi')
      plaintext = plaintext.replace(pattern, after, 'g');
    })
    return plaintext;
  };


})(jQuery)
