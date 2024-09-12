const main = document.querySelector(".main")
const cur = document.querySelector(".cursor")

main.addEventListener("mousemove",function(event){
    cur.style.left = event.x+"px"
    cur.style.top = event.y+"px"
    
})