let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  let fact = await getFacts();
  // console.log(fact);
  let p = document.querySelector("p");
  p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
  try {
    let res = await axios.get(url);
    let fact = res.data.fact;
    return fact;
  } catch (error) {
    console.log(error);
    return "No fact found";
  }
}
