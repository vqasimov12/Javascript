class Person {
  protected name: string;
  protected surname: string;
  protected email: string;
  private password: string;
  constructor(personProperties: PersonProperties) {
    this.name = personProperties.name;
    this.surname = personProperties.surname;
    this.email = personProperties.email;
    this.password = personProperties.password;
  }

  getInfo(): void {
    console.log(
      `Name: ${this.name}\nSurname: ${this.surname}\nEmail: ${this.email}`
    );
  }

  changeEmail(newEmail: string): void {
    this.email = newEmail;
  }
}

interface PersonProperties {
  name: string;
  surname: string;
  email: string;
  password: string;
}
const personP: PersonProperties = {
  name: "User",
  surname: "user",
  email: "user@gmail.com",
  password: "password123",
};

const person = new Person(personP);
person.getInfo();
person.changeEmail("newEmail@gmail.com");
person.getInfo();
