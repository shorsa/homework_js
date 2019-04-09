// Ваша задача - напилить код функции handler, которая получает сообщение и заносит его в объект log ,в виде нового свойства,значение которого - текст поступившего сообщения, а ключ ( имя свойства ) - это время поступления сообщения ( в виде строки )

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
];

var log = {};

var sendMessage = (message, callback) =>
    setTimeout(
        () => callback(message),
        Math.random() * 7000
    );


let handler = (message) =>
    Object.defineProperty(
        log, getKey(), {value: message}
        );

function getKey() {
    var key = new Date().toLocaleString().split(", ")[1];
    return log [key] ? key + "[2]" : key
}

messages.forEach(
    message => sendMessage(message, handler)
);


