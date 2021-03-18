$(".toggle").click(function(){
    $(this).find(".toggleContainer").toggleClass("active");
    $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
  });

  $(".searchButton").click(function (){
      $(".searchButton").toggleClass("active");

      if ($(".searchButton").hasClass("active")) {

        $(".searchBar").css("height","100vh");
        $("#searchForm").css("opacity","1");
        $(".searchIcon").removeClass("fa-search").addClass('fa-times');

      

      }

      else

  });