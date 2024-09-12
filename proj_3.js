const colck = document.getElementById('clock')
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    colck.innerHTML = date.toLocaleTimeString() 
},1000);    