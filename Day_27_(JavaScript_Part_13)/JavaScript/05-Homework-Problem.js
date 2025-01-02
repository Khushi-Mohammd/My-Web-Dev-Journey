const url = "http://universities.hipolabs.com/search?name=india&state=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let state = document.querySelector("input").value;
  console.log(state);
  let colArray = await getColleges(state);
  show(colArray);
});

function show(colArray) {
  let list = document.querySelector("#list");
  list.innerText = "";
  for (col of colArray) {
    // console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
  }
}

let state = "delhi"
async function getColleges(state) {
  try {
    let res = await axios.get(url + state);
    return res.data;
  } catch (error) {
    console.log("Error :", error);
  }
}
