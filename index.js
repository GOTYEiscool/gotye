var speed=10
document.addEventListener("keypress", function (event){
    document.getElementById("gotye").classList.toggle("reverse");
    speed=speed-0.1
    document.getElementById("gotye").style.animationDuration=speed + "s"
})