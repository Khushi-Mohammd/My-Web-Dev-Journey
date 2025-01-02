let h1 = document.querySelector("h1");
let inp = document.querySelector("input");

inp.addEventListener("input", function () {
  let userInp = inp.value;

  let filteredInp = "";
  for (char of userInp) {
    if (char >= "a" && char <= "z" || char >= "A" && char <= "Z" || char == " ") {
      filteredInp += char;
    }
  }

  inp.value = filteredInp;
  h1.innerText = inp.value;
});