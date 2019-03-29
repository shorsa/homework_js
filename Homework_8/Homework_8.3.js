function User(name) {
    this.name = name;
    this.id = this.counter()

}

User.prototype.counter = (function () {
    var id = 0;
    return function () {
        return typeof this.id === 'number' ? id : id++;
    }
})();

var users = [
    new User("Семен"),
    new User("Антон"),
    new User("Демьян"),
    new User("Василий")
];