class Nologist {
  name: string;
  age: number;
  _languages: string[];
  constructor(name: string, age: number, languages: string[]) {
    (this.name = name), (this.age = age), (this._languages = languages);
  }
  get languages() {
    return this._languages.join(", ");
  }

  greet() {
    return `Hi, I'm ${this.name}, I'm ${this.age} year old, and I speak ${this.languages}`;
  }
}

let Shae = new Nologist("Shae", 26, ["English", "Mandarin"]);

console.log(Shae.greet());
