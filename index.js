let dok = document.getElementById("button")
let Side = document.getElementById("aside")
let Close = document.getElementById("close")

dok.addEventListener("click",function () {
     if(Side.style.width = "0px"){
        Side.style.padding = "16px"
        Side.style.width = "400px"
        Side.style.transition = "300ms"
    }
    else{
        Side.style.width = "0px"
    }
})



Close.addEventListener("click",function () {
     if(Side.style.width = "400px"){
        Side.style.width = "0px"
        Side.style.padding = "0px"
        Side.style.transition = "300ms"
     }
    })