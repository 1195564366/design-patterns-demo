class Person {
  constructor (name) {
    this.name = name
  }

  getName () {
    return this.name
  }
}

let p = new Person('鲁攀');
console.log(p.getName())