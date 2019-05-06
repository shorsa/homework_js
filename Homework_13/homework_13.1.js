// Загрузить картинку из сети с помощью fetch в виде объекта Blob
// Создать временную ссылку на полученный объект
// Разместить изображение на странице
let request = new Request(
    'https://thumbs.gfycat.com/LivelyObviousAnhinga-size_restricted.gif',
    {
        method : 'GET'

    }
);

fetch(request)
    .then(response => response.blob()
        .then( response =>
            document.body.appendChild(document.createElement('img'))
                .src = 	URL.createObjectURL(response)
        )
    );
