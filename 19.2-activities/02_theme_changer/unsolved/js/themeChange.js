$(".themeChange").on("click",function(){
    if ($(this).hasClass("regular")){
       $("#theme").attr("herf","ccs/blank.css")
       console.log("default");

    }

    else if ($(this).hasClass("blue")){
        $("#theme").attr("herf","ccs/blue.css")
        console.log("its blue");
 
     }
     else if ($(this).hasClass("dark")){
        $("#theme").attr("herf","ccs/dark.css")
        console.log("its dark");
 
     }

})