function User(name) {
    this.name = name;
    var presence = false;
    Object.defineProperty(this, "presence", {
        get: () =>
            presence ? `${this.name} is present` : `${this.name} is absent`,
        set: newPresense =>
            presence = Boolean(newPresense.replace(/\s/g, ''))
    })
}

let user = new User("Ivan");
console.info(user.presence);

user.presence = "+";
console.info(user.presence);