﻿export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`Hi I'm ${this.name} and I'm ${this.age} years old.`);
    }
}