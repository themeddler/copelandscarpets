

window.onresize = function (){
    var splash = document.getElementById("splashBanner")
    var billboard = document.getElementById("billboard")
    var whyus = document.getElementById("whydifferent")
    var billboardMargin;
    var height;
    var winHeight;
    var whyusheight

    var innerHeight = window.innerHeight
    var innerWidth = window.innerWidth



    if (innerWidth < 768) {
        billboardMargin = "top: " + 130 + "px" ;
        height = innerHeight;
    } else {
        height = innerHeight - 15;
        billboardMargin = "top: " + (height *.45) + "px" ;
    }

    winHeight = "height: " + height + "px" ;
    whyusheight = "height:"+ innerHeight +"px";

    billboard.setAttribute("style",billboardMargin)
    splash.setAttribute("style", winHeight)
};

window.dispatchEvent(window.onresize());

$(document).ready(
    function (){
        $.localscroll();
    }
);

//$(window).resize(function() {
//    $('#splashBanner').height($(window).height() - 46);
//});
//
//$(window).trigger('resize');