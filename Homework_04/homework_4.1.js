var purse = {
    pomade: 'помада',
    carcass: 'туш',
    mirror: 'зеркало',
    append: function (name_kay , name = name_kay) {
        this[name_kay] = name;
    },
    delete: function () {
        delete this.name_kay;

    }
};