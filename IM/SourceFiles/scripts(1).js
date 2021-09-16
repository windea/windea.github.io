jQuery(document).ready(function($){
    function close_nav_dropdown() {

      "use strict";

      if ($(window).width() >= 768) {
        $('.navbar .dropdown').hover(function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
        }, function() {
          $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105);
        });
      }
    }
    close_nav_dropdown();
    $(window).resize(close_nav_dropdown);

    // Alert Notification
    $(".alert .toggle-alert").click(function(){
      $(this).closest(".alert").slideUp();
      return false;
    });

});
