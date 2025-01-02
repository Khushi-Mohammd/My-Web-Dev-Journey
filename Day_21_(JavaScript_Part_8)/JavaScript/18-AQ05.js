let obj1 = {
  a: 1,
  b: 2
};

let obj2 = {
  c: 3,
  d: 4
};

let mergeObject = (obj1, obj2) => ({...obj1, ...obj2});

let mergedObj = mergeObject(obj1, obj2);

console.log(mergedObj);