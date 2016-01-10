(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
     
        
        //get url
        
        var url      = window.location.href; 
        var pieces = url.split("/");
        var progect = pieces[pieces.length - 1];
        
        if(progect == "progects"){
          console.log("yes");
          $('#overlay').css('width', '40%!important');
        }
        
  
    }
  };
})(jQuery);




