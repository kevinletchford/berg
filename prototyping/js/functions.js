$(function() {
  var currentPage = $(location).attr('href');
  var pageHash = currentPage.split('#')[1];
  pageLoad(pageHash);
});


function pageLoad(pageURL) {
  $.ajax({
    url: "/pages/" + pageURL + ".html",
    success: function(data) {
      $('#main').removeClass("done");
      $('#main').html(data);
    },
  }).always(function() {
    $('#main').addClass("done");
  });
}


$("nav a").click(function() {
  navLink = $(this).attr("href").split('#')[1];
  pageLoad(navLink);
});
