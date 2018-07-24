/*
 * getStyleObject Plugin for jQuery JavaScript Library
 * From: http://upshots.org/?p=112
 */

(function($){
  $.fn.getStyleObject = function(){
      var dom = this.get(0);
      var style;
      var returns = {};
      if(window.getComputedStyle){
          var camelize = function(a,b){
              return b.toUpperCase();
          };
          style = window.getComputedStyle(dom, null);
          for(var i = 0, l = style.length; i < l; i++){
              var prop = style[i];
              var camel = prop.replace(/\-([a-z])/g, camelize);
              var val = style.getPropertyValue(prop);
              returns[camel] = val;
          };
          return returns;
      };
      if(style = dom.currentStyle){
          for(var prop in style){
              returns[prop] = style[prop];
          };
          return returns;
      };
      return this.css();
  }
})(jQuery);
$.fn.copyCSS = function(source){
  var styles = $(source).getStyleObject();
  this.css(styles);
}

$(document).ready(function () {
  $('input[type="submit"][class*="add"],input[type="submit"][name="add"],input[type="submit"][value*="to Cart"],input[type="submit"][value*="to cart"],input[type="submit"][value*="To Cart"],button[type="submit"][name="add"]').each(function (i, button) {

    $(button).after(`<${$(button).is('button') ? 'button' : 'a'} class="cyberAIO-${i}" href="javascript:void(0)">Buy with Cyber</${$(button).is('button') ? 'button' : 'a'}>`)

    $('.cyberAIO-' + i).copyCSS(button);

    $('.cyberAIO-' + i).click(function(event) {
      event.preventDefault()
      let currentVariant = $('[name="id"]').eq(i).val()
      if(window.location.hostname == 'yeezysupply.com') {
        currentVariant = $('.PI__select').eq(i).val()
        if(currentVariant == '') {
          $('.js-select').eq(i).parent().parent().addClass('js-error')
          return;
        } 
        $('.js-select').eq(i).parent().parent().removeClass('js-error')
        console.log(currentVariant)
      }
  
      window.open(`cyberaio:https://${window.location.hostname}/cart/${currentVariant}:1`, '_blank');
    })
  })
})