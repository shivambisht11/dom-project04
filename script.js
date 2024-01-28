var elm = document.querySelectorAll(".elm");

elm.forEach(function (val) {

    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        val.childNodes[3].style.opacity = 0;
    })

    val.addEventListener("mousemove", function (dt) {
        val.childNodes[3].style.left = dt.x + "px";
        val.childNodes[3].style.top = dt.y + "px";
    })

});



// var elm1 = document.querySelector("#elm1");
// var elmemg = document.querySelector("#elm1 img");

// elm1.addEventListener("mousemove",function(dt){
//     elmemg.style.left = dt.x+"px";
//     elmemg.style.top = dt.y+"px";
// })

// elm1.addEventListener("mouseenter",function(dt){
//     elmemg.style.opacity = 1;
// })

// elm1.addEventListener("mouseleave",function(dt){
//     elmemg.style.opacity = 0;
// })