// dynamic text animation
+(function($) {

       $(document).ready(bannerTextAnimation);

       function bannerTextAnimation() {
            var ALPHACRYPTO={};
            
           /* ALPHACRYPTO is a localized variable */
           var text = ALPHACRYPTO.slider_main || "WE {PARTIALS} TOGETHER",
               partials = ALPHACRYPTO.slider_partials || ["THINK", "WORK", "TRADE"],
               bannerText = '#mr-dynamic-wrapper',
               isFirst = true,
               $bannerText = jQuery(bannerText),
               partialsLength = partials.length,
               counter = 0;

           var dynamicTextHtml = '<ul>',
               liHeight = 0;

           partials.forEach(function (ele) {
               dynamicTextHtml += '<li>' + ele + '</li>';
           });
           dynamicTextHtml += '</ul>';

           var bannerTxtHtml = text.replace("{PARTIALS}", '</div><div class="text-slider">' + dynamicTextHtml + '</div><div>');
           jQuery($bannerText).append('<div>' + bannerTxtHtml + '</div>');

           function setHeight() {
               liHeight = jQuery(bannerText + ' ul li').height();
               jQuery(bannerText + ' > .text-slider').css('height', liHeight + 3);
               jQuery(bannerText + ' ul').css('transform', 'translateY(0)');
           }

           var scrollTxt = setInterval(function () {
               if (isFirst) {
                   liHeight = jQuery(bannerText + ' ul li').height();
                   isFirst = false;
                   setHeight();
               }

               jQuery(bannerText + ' ul').css('transform', 'translateY(' + -liHeight * (counter + 1) + 'px)');
               counter++;

               if (counter >= partialsLength) {
                   jQuery(bannerText + ' ul').css('transform', 'translateY(0)');
                   counter = 0;
               }

           }, 5000);

           setHeight();

           /* reinit Recalculate li Height */
           jQuery(window).resize(function () {
               isFirst = true;
               counter = 0;
               liHeight = 0;
               setTimeout(function () {
                   setHeight();
               }, 500);
           });

    };

})(jQuery);
