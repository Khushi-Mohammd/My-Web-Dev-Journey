let student = {
  name: "Shradha",
  age: 23,
  eng: 95,
  math: 93,
  phy: 97,
  getAvg() {
    console.log(this);
    let avg = (this.eng + this.math + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  }
};

function getAvg() {
  console.log(this);
}

console.log(student.getAvg());
console.log(getAvg());