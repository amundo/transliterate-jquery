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
        .next().after($.fn.transliterate.viewDiv(opts.table));

    })
  }

  $.fn.transliterate.defaults = { 
    caseSensitive: false
  };



  $.fn.transliterate.convert = function(plaintext, table){ 
    var converted = '';
    $.each(table, function(i, [before, after]){
      var pattern = new RegExp(before, 'gi')
      plaintext = plaintext.replace(pattern, after, 'g');
    })
    return plaintext;
  };

  $.fn.transliterate.viewTable = function (table){
    var htmltable = ['<table class="rules"><tr><th>type:</th><th>get:</th></tr>'];
    $.each(table, function(i, [before, after]){
      htmltable.push("<tr><td class='inputKey'>"+before+"</td><td class='outputLetter'>"+after+"</td></tr>");
    })
    htmltable.push('</table>');
    return htmltable.join('\n');
  }

  $.fn.transliterate.viewDiv = function (table){
    var div = ['<div class="rules">'];
    $.each(table, function(i, [before, after]){
      div.push("<span class='pair'><span class='before'>"+before+"</span>&nbsp;&rarr;&nbsp;<span class='before'>"+after+"</span></span>");
    })
    div.push('</div>');
    return div.join('\n');
  }


})(jQuery)
