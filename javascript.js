$(document).ready(function () {
  $(".download-btn").click(function () {
    window.alert("This would have work if there was a server!");
  });
  $("#subscribe button[type=button]").click(function () {
    const answer = window.prompt("Are you sure you want to become a batbro?");
    answer.toLowerCase() == "yes"
      ? window.alert("you are a good man!")
      : window.alert("you can be better...");
  });
});
