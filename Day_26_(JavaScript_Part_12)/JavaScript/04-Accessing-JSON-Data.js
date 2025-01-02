let jsonRes =
  '{"fact":"Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.","length":142}';

let validRes = JSON.parse(jsonRes);

console.log(validRes.fact);

let student = {
  name: "shradha",
  marks: 95
};

let validJson = JSON.stringify(student);

console.log(validJson);
