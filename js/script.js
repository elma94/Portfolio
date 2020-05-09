setTimeout(function(){ 
    $("#navbar, #home, #about, #work, #contact, #sidebar, #header").hide();
    $("body, html").css({"background-image": "none", "background-color": "black"});
    if (window.matchMedia('(max-width: 768px)').matches){
        $("#header").css({"position": "absolute", "top": "45%"});
    } else if(window.matchMedia('(min-width: 768px)').matches){
        $("#header").css({"position": "absolute", "top": "35%", "left": "15%"});
    }
    $("#header").fadeIn(2000);
});



$("document").ready(function(){


// S I D E B A R

if (window.matchMedia('(max-width: 768px)').matches){
    $("#sidebar").hide();
} else if(window.matchMedia('(min-width: 768px)').matches){
    setTimeout(function(){ 
        $("#sidebar").fadeIn(2000);
    }, 4000);
}
    var cookies = function(){
        window.cookieconsent.initialise({
            "palette": {
              "popup": {
                "background": "rgba(25, 25, 51, 0.175);",
                "text": "#6d5685"
              },
              "button": {
                "background": "transparent",
                "text": "##6d5685",
                "border": "#d310fa"
              }
            }
          });
    }; // cookies consent function

    setTimeout(function(){ 
        $("#header").animate({"position": "absolute", "top": "0%", "left": "0%", "height": "10vh"});
        $("#navbar, #home, #about, #work, #contact, #header").fadeIn(2000);
        $("body").fadeIn(2000, function(){
            $(this).css({"background-image": "url('images/background.jpg')"});
        })
        $("#about, #work").css({"top": "15vh"});
        if (window.matchMedia('(max-width: 768px)').matches){
            $("#contact").css({"top": "15vh"});
        } else if(window.matchMedia('(min-width: 768px)').matches){
            $("#about").css({"top": "15vh"});
            //$("#contact").css({"top": "20vh"});
            $("#work").css({"top": "10vh"});
            cookies();
        }
        
    }, 4000);


// H O M E  S C R E E N
    
var down=0;
var up=0;
    $("body").keyup(function(event){
        $("#scroll").css({"filter": "hue-rotate(20deg)"});
        function reset(){
            down=3;
            up =0;
        }

        function resetAll(){
            down=0;
            up=0;
        }

        if (event.which == 40 ) {
            down++;
            if ((down == 1)&& (up == 0)){
                $("#home").slideUp(1000);
                openAbout();
            } else if ((down == 2) && (up == 0)){
                work();
            } else if ((down == 3)&& (up == 0)){
                openContact();
            } else { reset(); }
        } else if( event.which == 38) {
            up++;
            if ((down == 3) && (up == 3)){
                openHome();
            } else if ((down == 3)&& (up == 2)){
                openAbout();
            } else if ((down == 3)&& (up == 1)){
               work();
            } else {  resetAll(); }
        } else  {event.preventDefault();}
       
    }); // keyup function

    $("#home_btn").css({"filter": "brightness(200%)", "transform": "scale(1.2)"});
    $("#about, #photo, #work, #contact").hide();



    $("#home_btn, #logo").on("click", function(){
        openHome();   
    }) //home onclick function

    $("#button").on("click", function(){
        openContact();
    }); //home button cta

    $("#button2").on("click", function(){
        openAbout();
    })  //home button cta
   

   function openHome(){
        $("#home").slideDown(1000);
        $("#about").slideDown(1000).css({"display": "none"});
        $("#work, #contact").hide();
        $("#header, #name, #vocation").show();
        $("#contact_btn, #work_btn, #about_btn").css({"filter": "brightness(100%)", "transform": "scale(1)"});
        $("#home_btn").css({"filter": "brightness(200%)", "transform": "scale(1.2)"});
    } // open home section function


// A B O U T  S E C T I O N


    function openAbout(){
        $("#home").slideUp(1000);
        $("#about").slideDown(1000);
        $("#work").slideUp(1000);
        $("#contact").slideUp(1000);
        $("#photo").show();
        $("#name").hide();
        $("#vocation").hide();
        $("#contact_btn, #work_btn, #home_btn").css({"filter": "brightness(100%)", "transform": "scale(1)"});
        $("#about_btn").css({"filter": "brightness(200%)", "transform": "scale(1.2)"});

        if (window.matchMedia('(max-width: 768px)').matches){
            //$("#about").css({"background-image": "url('images/about_me_photo.jpg')","z-index": "0", "top": "0"});
            //$("#logo").hide();
        } else if(window.matchMedia('(min-width: 768px)').matches){

        }
    } // about section function


    $("#about_btn").on("click", function(){
        openAbout();
        // about();
    }); //about onclick function

    $("#about-cta").on("click", function(){
       openWork();
       }) // see my work onclick event


// W O R K  S E C T I O N


    function openWork(){
        
        $("#home, #about, #contact").slideUp(1000);
        $("#work").slideDown(1000);
        $("#name, #vocation, #logo").show();
        $("#work_btn").css({"filter": "brightness(200%)", "transform": "scale(1.2)"});
        $("#home_btn, #about_btn, #contact_btn").css({"filter": "brightness(100%)", "transform": "scale(1)"});
    } // open work section function

    function work(){
        openWork();
        $("#work").keyup(function(){
            if ( event.which == 40 ) {
                event.preventDefault();
                openContact();
                return false;
               } 
               
        }); //work keyup function
       
        
        if (window.matchMedia('(max-width: 768px)').matches){
           
            $("#card-2").on("click", function openCard2(){
            
                $("#card-2").css({
                    "height": "90%",
                    "transform": "translate(-40vw, 0)",
                })
        
                $("#card-1").animate({
                    "transform": "translate(-50vw, 0)",
                    "height" : "70%"
                },500, )
        
                $("#card-3").show();
        
                $("#card-3").css({
                    "transform": "translate(-30vw, 0)",
                    "height" : "70%"
                })
        
                $("#card-1").on("click", function(){
                    $("#card-1").show().css({
                        "height": "90%",
                        "transform": "translate(20vw, 0)",
                    })
            
                    $("#card-2").css({
                        "transform": "translate(30vw, 0)",
                        "height" : "70%"
                    })
                    
                    $("#card-3").hide();
                }) // card 1 inside 2
        
                $("#card-3").on("click", function openCard3(){
                    
                    $("#card-1").hide();
        
                    $("#card-3").css({
                        "height": "90%",
                        "transform": "translate(-40vw, 0)",
                    })
            
                    $("#card-2").css({
                        "transform": "translate(-50vw, 0)",
                        "height" : "70%"
                    })
            
                    $("#card-4").show();
            
                    $("#card-4").css({
                        "transform": "translate(-30vw, 0)",
                        "height" : "70%"
                    })
        
                    $("#card-2").on("click", function(){
        
                        $("#card-2").css({
                            "height": "90%",
                            "transform": "translate(-40vw, 0)",
                        })
                
                        $("#card-1").show().css({
                            "transform": "translate(-50vw, 0)",
                            "height" : "70%"
                        })
                
                        $("#card-3").show();
                
                        $("#card-3").css({
                            "transform": "translate(-30vw, 0)",
                            "height" : "70%"
                        })
                    }) // card 2 inside 3
        
        
                        $("#card-4").on("click", function openCard4(){
        
                            $("#card-1").hide();
                            $("#card-2").hide();
                           
                            $("#card-4").css({
                                "height": "90%",
                                "transform": "translate(-40vw, 0)",
                            })
                    
                            $("#card-3").css({
                                "transform": "translate(-50vw, 0)",
                                "height" : "70%"
                            })
                    
                            $("#card-5").show();
                    
                            $("#card-5").css({
                                "transform": "translate(-30vw, 0)",
                                "height" : "70%"
                            })
        
                            $("#card-3").on("click", function(){
                                $("#card-1").hide();
                                $("#card-3").css({
                                    "height": "90%",
                                    "transform": "translate(-40vw, 0)",
                                })
                        
                                $("#card-2").show().css({
                                    "transform": "translate(-50vw, 0)",
                                    "height" : "70%"
                                })
                        
                                $("#card-4").show();
                        
                                $("#card-4").css({
                                    "transform": "translate(-30vw, 0)",
                                    "height" : "70%"
                                })
                            }) //card 3 inside 4
                            $("#card-5").on("click", function openCard5(){
                                
        
                                $("#card-1").hide();
                                $("#card-2").hide();
                                $("#card-3").hide();
        
                                $("#card-5").css({
                                    "height": "90%",
                                    "transform": "translate(-40vw, 0)",
                                })
                        
                                $("#card-4").css({
                                    "transform": "translate(-50vw, 0)",
                                    "height" : "70%"
                                })
        
                                $("#card-4").on("click", function(){
                                    $("#card-1").hide();
                                    $("#card-2").hide();
                                
                                    $("#card-4").css({
                                        "height": "90%",
                                        "transform": "translate(-40vw, 0)",
                                    })
                            
                                    $("#card-3").show().css({
                                        "transform": "translate(-50vw, 0)",
                                        "height" : "70%"
                                    })
                            
                                    $("#card-5").show();
                            
                                    $("#card-5").css({
                                        "transform": "translate(-30vw, 0)",
                                        "height" : "70%"
                                    })
        
                                }) //card 4 inside 5
                            }) //card 5 onclick function
                    }) // card 4 onclick function
                }) // card 3 onclick function
            }) //card 2 onclick function
    
        } else if(window.matchMedia('(min-width: 768px)').matches){
    
            $("#card-2").on("mouseover", function(){
                $(this).css({"transform": "none", "height": "100%", "transform": "scale(1)", "filter": "brightness(100%)"});
                $("#card-1").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
                $("#card-3").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
                $("#card-4").css({"height": "80%", "transform": "translateY(-4%)", "filter": "brightness(60%)"});
                $("#card-5").css({"height": "70%", "transform": "translateY(-6%)", "filter": "brightness(60%)"});
            }) // card 2 onclick 
    
            $("#card-3").on("mouseover", function(){
                $(this).css({"transform": "none", "height": "100%", "transform": "scale(1.1)", "filter": "brightness(100%)"});
                $("#card-1").css({"height": "80%", "transform": "translateY(-4%)", "filter": "brightness(60%)"});
                $("#card-2").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
                $("#card-4").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
                $("#card-5").css({"height": "80%", "transform": "translateY(-4%)", "filter": "brightness(60%)"});
            }) // card 3 onclick
    
            $("#card-4").on("mouseover", function(){
                $(this).css({"transform": "none", "height": "100%", "transform": "scale(1.1)", "filter": "brightness(100%)"});
                $("#card-1").css({"height": "70%", "transform": "translateY(-6%)", "filter": "brightness(60%)"});
                $("#card-2").css({"height": "80%", "transform": "translateY(-4%)", "filter": "brightness(60%)"});
                $("#card-3").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
                $("#card-5").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
            }) // card 4 onclick
    
            $("#card-5").on("mouseover", function(){
                $(this).css({"transform": "none", "height": "100%", "transform": "scale(1.1)", "filter": "brightness(100%)"});
                $("#card-1").css({"height": "60%", "transform": "translateY(-8%)", "filter": "brightness(60%)"});
                $("#card-2").css({"height": "70%", "transform": "translateY(-6%)", "filter": "brightness(60%)"});
                $("#card-3").css({"height": "80%", "transform": "translateY(-4%)", "filter": "brightness(60%)"});
                $("#card-4").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
            }) // card 5 onclick
    
            $("#card-1").on("mouseover", function(){
                $(this).css({"transform": "none", "height": "100%", "transform": "scale(1.1)", "filter": "brightness(100%)"});
                $("#card-2").css({"height": "90%", "transform": "translateY(-2%)", "filter": "brightness(60%)"});
                $("#card-3").css({"height": "80%", "transform": "translateY(-4%)", "filter": "brightness(60%)"});
                $("#card-4").css({"height": "70%", "transform": "translateY(-6%)", "filter": "brightness(60%)"});
                $("#card-5").css({"height": "60%", "transform": "translateY(-8%)", "filter": "brightness(60%)"});
            }) // card 1 onclick
        } // if statement for work section
    } // work section function

    $("#work_btn").on("click", function (){
       
        openWork();
        work();
    }); // work onclick function


//  C O N T A C T  S E C T I O N

   function openContact (){
    $("#logo, #name, #vocation").show();
        $("#home, #about, #work").slideUp(1000);
        $("#contact").slideDown(1000);
        $("#contact_btn").css({"filter": "brightness(200%)", "transform": "scale(1.2)"});
        $("#work_btn, #home_btn, #about_btn").css({"filter": "brightness(100%)", "transform": "scale(1)"});
        if (window.matchMedia('(max-width: 768px)').matches){
            var icons = $("#icons");
            $("#icons").css({"position": "absolute", "left":"40%", "display": "flex", "flex-direction": "row","top": "7%", "z-index": "10", "width": "auto", "height": "7vh", "justify-content": "center", "align-items": "center"});
        $("#icons span:first-child").css({"height": "auto", "width": "auto", "margin-right": "30px", "margin-left": "-20px"});
        $("#icons span:nth-child(2)").css({"height": "auto", "width": "auto", "margin-left": "10vw", "margin-right": "5px"});
            $("#contact").append(icons);
        }
        $("#icons").css({"display": "block !important"});
    } // open contact section
    
    $("#contact_btn").on("click", function (){
        openContact();
    }) // contact onclick function


// FORM VALIDATION 


$("form[name='frmContact']").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 5,
        maxlength: 200,
        lettersonly: true
      },
    },
    messages: {
      name: "Please enter your firstname",
      email: "Please enter a valid email address",
      message: {required: "Please enter your message"}
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

}) // document ready function
