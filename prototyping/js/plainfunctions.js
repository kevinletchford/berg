
var turboBerg = (function(){
  var options = {"pageFolder":"/pages/"};
  var currentPage = window.location.href.split('#')[1];

  var router = function(link){
    var buildHrefString = function(){
      var bustCache = '?' + new Date().getTime();
      var pages = options.pageFolder + pageURL + bustCache;
      return pages;
    };
    var performAjaxRequest = function(){
      var request = new XMLHttpRequest();
      request.open('GET', pages, true);
      request.onload = function() {
        console.log(request.status);
        if (request.status >= 200 && request.status < 400) {
          var response = request.responseText;
          document.getElementById("main").innerHTML = response;
        }
        else {
          console.log("error will martin")
        }
      };
      request.send();
    };
    var redirects = function(){}
  };

  var navigation = function (navLinks){
    var navLinkArray = Array.prototype.slice.call(document.querySelectorAll(navLinks));
    function loadNavLink() {
        var linkHref = this.getAttribute("href").split('#')[1];
        pageLoad("/pages/",linkHref);
    };
    navLinkArray.map((i) => {
      i.addEventListener('click', loadNavLink, false);
    })
  }




  return{
    load: router,
    navigation: navigation
  };

});





(function() {
  var options = {
    "pageFolder":"/pages/",
    "test":"test2"
  };
  var currentPage = window.location.href.split('#')[1];
  router(currentPage);
  navigation("nav a");
})();

function router(link) {
  buildHrefString(link);
  performAjaxRequest(pages);
  redirects();
}


function buildHrefString(pageURL){
  var bustCache = '?' + new Date().getTime();
  var pages = options.pageFolder + pageURL + bustCache;
  return pages;
}

function performAjaxRequest(pageURL){
  var request = new XMLHttpRequest();
  request.open('GET', pages, true);
  request.onload = function() {
    console.log(request.status);
    if (request.status >= 200 && request.status < 400) {
      var response = request.responseText;
      document.getElementById("main").innerHTML = response;
    }
    else {
      console.log("error will martin")
    }
  };
  request.send();
}

function redirects(){

}

function loadCurrentPage(){

}

function navigation(navLinks){
  var navLinkArray = Array.prototype.slice.call(document.querySelectorAll(navLinks));
  function loadNavLink() {
      var linkHref = this.getAttribute("href").split('#')[1];
      pageLoad("/pages/",linkHref);
  };
  navLinkArray.map((i) => {
    i.addEventListener('click', loadNavLink, false);
  })
}
