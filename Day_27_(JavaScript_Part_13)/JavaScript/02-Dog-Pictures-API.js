let url = "https://catfact.ninja/fact";

let url2 = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");

btn.addEventListener("click", async function () {
  let link = await getImage();
  let img = document.querySelector("img");
  img.setAttribute("src", link)
});


async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (error) {
    console.log(error);
    return "No Image found";
  }
}

//=========================================================================//

// let btn = document.querySelector("button");

// btn.addEventListener("click", async function () {
//   let fact = await getFacts();
//   // console.log(fact);
//   let p = document.querySelector("p");
//   p.innerText = fact;
// });


// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     let fact = res.data.fact;
//     return fact;
//   } catch (error) {
//     console.log(error);
//     return "No fact found";
//   }
// }
