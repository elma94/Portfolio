

$("document").ready(function(){

    // S I D E B A R

if (window.matchMedia('(max-width: 768px)').matches){
    $("aside").hide();
} else if(window.matchMedia('(min-width: 768px)').matches){
    $("aside").show();
}

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
                about();
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
        $("#about").slideDown(1000);
        $("#work").hide();
        $("#contact").hide();
        $("#header, #name, #vocation").show();
    } // open home section function


// A B O U T  S E C T I O N


    function openAbout(){
        $("#home").slideUp(1000);
        $("#about").slideDown(1000);
        $("#work").slideUp(1000);
        $("#contact").slideUp(1000);
        $("#name").hide();
        $("#vocation").hide();
       // $("#logo").css({"margin-left": "45vw"});
        
    } // open about section function

    function about(){

        $("#name").hide();
        $("#vocation").hide();

        if (window.matchMedia('(max-width: 768px)').matches){
            $("#about").css({"background-image": "url('./images/about_me_photo.jpg')", "background-size": "cover","z-index": "0"});
        } else if(window.matchMedia('(min-width: 768px)').matches){

        }
    } // about section function


    $("#about_btn").on("click", function(){
        openAbout();
        about();
    }); //about onclick function

    $("#about-cta").on("click", function(){
       openWork();
       }) // see my work onclick event


// W O R K  S E C T I O N


    function openWork(){
        
        $("#home").slideUp(1000);
        $("#about").slideUp(1000);
        $("#contact").slideUp(1000);
        $("#work").slideDown(1000);
        $("#header, #name, #vocation").show();
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
                $(this).css({"transform": "none", "height": "100%", "transform": "scale(1.1)", "filter": "brightness(100%)"});
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
        $("#home").slideUp(1000);
        $("#about").slideUp(1000);
        $("#work").slideUp(1000);
        $("#contact").slideDown(1000);
    } // open contact section
    
    $("#contact_btn").on("click", function (){
        openContact();
    }) // contact onclick function


}) // document ready function
