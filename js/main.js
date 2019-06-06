//display/hide video modal
var videoLink=$(".header__video-bg");
var videoModal=$(".video-modal");
var video=$(".video-modal__iframe");
var src=video[0].src;

$(".header__video-bg").click(function(x){
  x.preventDefault();
  $(video).attr("src",src);
  $(".video-modal").fadeIn();
})

$(".video-modal").click(function(x){
  x.preventDefault();
  $(video).attr("src",'');
  $(".video-modal").fadeOut();
})
  //scroll reveal Function
//check if element is in the viewport to start the animation
function isInWindow(elem) {
  var limits = elem.getBoundingClientRect();
  if (limits.top < window.innerHeight) {
    return true;
  }
}
//scroll reveal function takes an element as a parameter
//and adds the animation if it comes into the viewport
function sr(elem) {
  if (isInWindow(elem)) {
    $(elem).addClass("animate-sr");
  }
}
//runs the scroll reveal function on all elements with
//.sr on window scroll.
$(window).scroll(function () {
  $(".sr").each(function(i,value){
    sr(value);
  });
})
