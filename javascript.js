$(document).ready(function () {
  $(".download-btn").click(function () {
    window.alert("This would have work if there was a server!");
  });
  $("#subscribe button[type=button]").click(function () {
    window.alert("This would have worked too...");
  });
  $("#subscribe button[type=button]").hover(
    function () {
      $(this).css("font-size", "1.4rem");
    },
    function () {
      $(this).css("font-size", "1.2rem");
    }
  );
  $(".nav-link").hover(
    function () {
      $(this).css("color", "GhostWhite");
    },
    function () {
      $(this).css("color", "rgba(255, 255, 255, 0.5)");
    }
  );
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $("nav").height()) {
      $(".navbar").addClass("fixed-top");
      $(".navbar").removeClass("bg-transparent");
      $(".navbar").css("backgroundColor", "#282a3a");
      $(".navbar").css("height", "10%");
    } else {
      $(".navbar").removeClass("fixed-top");
      $(".navbar").addClass("bg-transparent");
      $(".navbar").css("height", "initial");
    }
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 600) {
      $("#scrollTop").show();
      $("#scrollTop").click(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    } else {
      $("#scrollTop").hide();
    }
  });
});
