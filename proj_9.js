var arr = [
    {dp:"/spiderman.png",story:"kedarnath.jpg"},
    {dp:"/superman.jpeg",story:"kedarnath.jpg"},
    {dp:"/batman.jpeg",story:"kedarnath.jpg"},
    {dp:"/ironman.jpeg",story:"kedarnath.jpg"}
]
var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
   clutter += `<div class="story"><img id="${idx}" src="${elem.dp}" alt=""></div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
            document.querySelector(".full-screen").style.display = "none"
    },2000)
})