// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0 0";
  } else {
    document.getElementById("navbar").style.padding = ".5rem .5rem";
    // document.getElementById("brandLogo").style.fontSize = "35px";
  }  
  
}



