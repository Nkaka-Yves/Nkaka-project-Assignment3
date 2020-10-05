jQuery(document).ready(function() {
  jQuery("button").click(function() {
    alert("Thank you Your feedback is recorded");
  });
  $(".hid1").click(function() {
    $(".dis1").toggle();
    $(".hid1").toggle();
  });
  $(".hid2").click(function() {
    $(".dis2").toggle();
    $(".hid2").toggle();
  });
  $(".hid3").click(function() {
    $(".dis3").toggle();
    $(".hid3").toggle();
  });
});
