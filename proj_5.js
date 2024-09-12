const istatus = document.querySelector('h5')
const add = document.querySelector("#add")
let check = 0
const btn = document.querySelector("button")

add.addEventListener('click',function(){
    if(check == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        add.innerHTML =  "Remove Friend"
        btn.style.backgroundColor = "gray"
        check = 1
    }else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        add.innerHTML = "Add Friend"
        btn.style.backgroundColor = "cadetblue"
        check = 0
    }

})
