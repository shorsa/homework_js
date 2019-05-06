// ужно напилить код рекурсивной функции recursive,
// которая вызывает sendMessage поочередно с каждым элементом массива messages,
// но только после того, как предыдущий месседж будет залогирован в объекте log

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
];

messages.getKey = () => new Date().toLocaleString().split(", ")[1];

const log = {};
let sendMessage = message => new Promise(
    resolve => setTimeout(
        () => resolve(message),
        Math.random() * 7000
    )
);

var sendAll = () => {
    var index = 0;

    function recursive() {
        sendMessage(messages [index++])
            .then(
                response => {
                    if (response) {
                        Object.assign(log,
                            {[messages.getKey()]: response}
                        );
                        arguments.callee()
                    } else {
                        console.log(log)
                    }
                }
            )
    }

    recursive()
};

sendAll();

