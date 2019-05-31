
var videoLink=$(".header__video-bg");
var videoModal=$(".video-modal");
var video=$(".video-modal__iframe");
var src=video[0].src;
console.log(src);

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
