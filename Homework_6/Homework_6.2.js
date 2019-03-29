let tags = [
    {
        name: 'header',
        attrs: {
            className: 'header',
            innerText: 'Hello World',
        }
    },
    {
        name: 'section',
        attrs: {
            className: 'section',
            innerText: 'Good Morning',
        }
    },
    {
        name: 'div',
        attrs: {
            className: 'div',
            innerText: 'Good afternoon',
            title: 'div'
        }

    },
    {
        name: 'img',
        attrs: {
            src: 'https://pbs.twimg.com/profile_images/970300343425945601/5LeEUlpw.jpg',
            title: 'Title',
            alt: 'photo'

        }
    },
    {
        name: 'p',
        attrs: {
            className: 'p_teg',
            innerText: '***',
        }
    },
    {
        name: 'footer',
        attrs: {
            className: 'footer',
            innerText: 'Omg!'
        }

    }
];

var styleSheet = document.head.appendChild(
    document.createElement('style')
);
styleSheet.textContent = `.header, .section, .div, img, .p_teg, .footer {
                        background-color: #34343;
                        width: 100px;
                        height: 100px;
                    }`;



for (var tag of tags) {
    var elem = document.body.appendChild(
        document.createElement(`${tag.name}`)
    );
    for (var attr in tag.attrs)
        elem[attr] = tag.attrs[attr];
        elem.onclick = function (event) {
            event.target.style.color = 'red'
    }
}