const student = {
  name: "aman",
  marks: 95,
  prop: this, // Global scope.
  getName() {
    console.log(this); // Here "this" means object(student object)
    console.log(this.name);
  },
  getMarks: () => {
    // Parent's(Lexical) scope --> Window.
    console.log(this); // Here "this" means parent's scope(object's(student's) scope)
    console.log(this.marks);
  },
  getinfo1: function() {
    setTimeout(() => {
      console.log(this); // Yahan "this" ka matlab hai, jisne isko call kiya uske parent ka "this". Yahan "this" ko "setTimeout" ne
    }, 2000);            // call kiya or uska parent yani "getInfo1" ka "this". Or "getInfo1" ka "this" "student" object hai.
  },
  getinfo2: function() {
    setTimeout(function () {
      console.log(this); // Yahan "this" ka matlab hai, jisne isko call kiya uska "this". Yahan "this" ko "setTimeout" ne call kiya.
    }, 2000);            // Or "setTimeout" function "windows" object ke andar aata hai to uska "this", "windows" object hua.
  }
};

student.getName();
student.getMarks();
student.getinfo1();
student.getinfo2();