var Person = /** @class */ (function () {
    function Person(personProperties) {
        this.name = personProperties.name;
        this.surname = personProperties.surname;
        this.email = personProperties.email;
        this.password = personProperties.password;
    }
    Person.prototype.getInfo = function () {
        console.log("Name: ".concat(this.name, "\nSurname: ").concat(this.surname, "\nEmail: ").concat(this.email));
    };
    Person.prototype.changeEmail = function (newEmail) {
        this.email = newEmail;
    };
    return Person;
}());
var personP = {
    name: "User",
    surname: "user",
    email: "user@gmail.com",
    password: "password123",
};
var person = new Person(personP);
person.getInfo();
person.changeEmail("newEmail@gmail.com");
person.getInfo();
