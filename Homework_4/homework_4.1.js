var purse = {
    pomade: '������',
    carcass: '���',
    mirror: '�������',
    append: function (name_kay , name = name_kay) {
        this[name_kay] = name;
    },
    delete: function () {
        delete this.name_kay;

    }
};