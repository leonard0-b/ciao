$(".hamburger").click(function(){
  console.log("ok");
  $(".navcollapse").toggleClass("show");
  $(".hamburger > span").toggleClass("toggle")
});