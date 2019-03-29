var typeMessage = (function (velocity) {
    let container = document.getElementById("demo") ?
        document.getElementById("demo") :
        document.body.appendChild(
            document.createElement("h3")
        );
    container.style = `color: magenta;`;

    return function (message) {
        message = String(message);
        var strArr = message.split('');
        setTimeout(() => {
            if (strArr.length) {
                container.textContent += strArr.shift();
                arguments.callee(strArr.join(''))
            }
        }, 1000 * velocity)
    }
})(1);

typeMessage(`Welcome to the hell`);
