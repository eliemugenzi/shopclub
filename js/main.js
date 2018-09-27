$(document).ready(() => {
  $(".toggle").on("click", () => {
    $("#side-menu").addClass("active");
  });
  $(".close").on("click", () => {
    $("#side-menu").removeClass("active");
  });

});
