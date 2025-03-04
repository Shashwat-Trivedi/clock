

setInterval(() => {
    const date = new Date();
    console.log(date.toLocaleTimeString());
    document.querySelector('.clock').innerHTML = date.toLocaleTimeString();
},1000)