const classInfo = {
  aman: {
    grade: "A+",
    city: "Delhi"
  },
  
  shradha: {
    grade: "A",
    city: "Pune"
  },
  
  karan: {
    grade: "O",
    city: "Mumbai"
  },
  
};

console.log(classInfo);
console.log(classInfo.shradha);
console.log(classInfo.shradha.city);

classInfo.shradha.city = "Gurgaon";
console.log(classInfo);
console.log(classInfo.shradha);
console.log(classInfo.shradha.city);