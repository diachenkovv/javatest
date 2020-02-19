function scale() {
    let img = document.getElementById("img");
    if (img.style.width == 100+"px")
        img.style.width = 500+"px";
    else
        img.style.width = 100+"px";
}
function scale1() {
    let sc = 1;
    let img1 = document.getElementById("img2");
    if (img1.style.width == 100+"px" && sc == 1) {
        img1.style.width = 1000+"px";
        sc = 0;
    }
    
    else
        img1.style.width = 100+"px";
        
}