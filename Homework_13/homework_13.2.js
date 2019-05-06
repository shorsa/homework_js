// Напилить код функции testFile
// Функция testFile должна проверять, является ли выбранный файл изображением,
// и если нет - выводить сообщение "Выбранный файл не является изображением"
var addElem = tagName => document.body.appendChild(
    document.createElement(tagName)
);

var selector = addElem('input');
selector.type = 'file';
selector.multiple = true;
selector.id = 'selectImages';
selector.style.display = 'none';

var label = addElem('label');

label.htmlFor = 'selectImages';
label.innerText = 'Select images';

var testFile = file => new Promise(
    (resolve, reject) => {
        file.type.split('/')[0] === 'image' ? (function () {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                return fileReader.onload = event =>
                    resolve(event.target.result)
            })()
            : reject('Выбранный файл не является изображением')
    }
);

selector.onchange = function (event) {
    for (var file of event.target.files) {
        testFile(file)
            .then(result => addElem("img").src = result)
            .catch(error => console.error(error))
    }
};