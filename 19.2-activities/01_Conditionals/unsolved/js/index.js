$('.tab').on("click", function(){
  
    if ($(this).hasClass("tab1")) {
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");

    }

    else if ($(this).hasClass("tab2")) {
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");

    }


});
