$(function() {

    $("#about").click(function(){
      $("#aboutme").toggle(); // Use toggle() to show/hide an element
      $("nav").css("opacity","0")
     
    });
   
    $("#close").click(function(){
      $("#aboutme").hide();
      $("nav").css("opacity","1");
    })
 
    $("#info").click(function(){
      $("#infome").toggle();
      $("nav").css("opacity","0");
    });

    $("#close2").click(function(){
      $("#infome").hide();
      $("nav").css("opacity","1");
    })
    
    $("#contact").click(function(){
      $("#contactme").toggle(); // Use toggle() to show/hide an element
      $("nav").css("opacity","0")
    })

    $("#close3").click(function(){
      $("#contactme").hide();
      $("nav").css("opacity","1");
    })

    $("#drop").click(function(){
      $("#list-group").toggle();
    })
   

   /* $("#abts").click(function(){
      $("#list-group").hide();
      $("#aboutme").toggle();
    })
    */
   
    $("#infos").click(function(){
      $("#list-group").hide();
      $("#infome").toggle();
    })

    $("#cont").click(function(){
      $("#list-group").hide();
      $("#contactme").toggle();
    })

  });
  
  
