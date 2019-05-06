// Задача: напилить код, который вызывает функцию sendMessage
// для каждого элемента массива messages и логирует полученные сообщения в объекте log

let messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
];

messages.getKey = () => {
    let key = new Date().toLocaleString().split(", ")[1];
    return log [key] ? log [key + "[2]"] ? key + "[3]" : key + "[2]" : key
};

const log = {};
let sendMessage = message => new Promise(
    resolve => setTimeout(
        () => resolve(message),
        Math.random() * 7000
    )
);


messages.forEach(message => {
    sendMessage(message)
        .then(message => Object.assign(log, {[messages.getKey()]: message}))
        .then(resp => console.log(resp))
});

