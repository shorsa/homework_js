(function () {
    var d = document;
    var elem_p = d.createElement('p');
    var elem_img = d.createElement('img');

    d.body.appendChild(elem_p).innerHTML = 'Параграф для клика, Кликай!';
    elem_img.style = `width : 100px;
    				  transition-duration : 2s;`;


    function set_img(event) {
        elem_p.appendChild(elem_img);
        elem_img.setAttribute('src', 'http://lizasimpson.com/uploads/homer-simpson.jpg');
    }

    function increase_img(event) {
        this.style.width = "200px";
    }

    function decrease_img(event) {
        this.style.width = "100px";
    }

    function remove_img(event) {
        this.style.display = 'none'
    }

    elem_p.addEventListener('click', set_img);
    elem_img.addEventListener('mouseover', increase_img);
    elem_img.addEventListener('mouseout', decrease_img);
    elem_img.addEventListener('click', remove_img);
})();