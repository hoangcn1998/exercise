$(document).ready(function() {
    const listImages = $(".slider img");
    let index = 0;

    function next() {
      $(".slider__control.next").click(function() {
        if(index < listImages.length - 1) {
          index++
        } else {
          index = 0;
          for(let i = 0; i < listImages.length; i++) {
            $(listImages[i]).css({"transform" : ""});
          }
        }

        $(listImages[index]).css({
          "transition" : "all 0.5s",
          "transform" : `translateX(-${100*index}%)`
        })
      })
    }

    function prev() {
     
    }

  function main() {
    next();
    prev();
  }

  main();
})