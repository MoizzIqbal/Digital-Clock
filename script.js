let time = document.getElementById("time");
    
setInterval(() => {
    let date = new Date();
    time.innerText =(date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds());
}, 1000);
