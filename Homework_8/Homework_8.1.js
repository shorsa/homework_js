(function(){
    var wrapper = document.body.appendChild(document.createElement('div'));

    var timer = setInterval( () => {
        var date = new Date().toLocaleString();
        return wrapper.innerText = `${date}`
    },1000);

    setTimeout(  () => {
        clearInterval(timer);
         wrapper.innerText = ''
    },100000)
})();