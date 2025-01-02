const url = "https://icanhazdadjoke.com/";

async function getJoke() {
  try {
    let config = { headers: { Accept: "Text/plain" } };
    let res = await axios.get(url, config);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}