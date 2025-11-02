async function fetchData() {
  const URL = `http://www.omdbapi.com/?apikey=17ee6f3f&s=blackhat`;
  const response = await fetch(URL).then(res => res.json());
  console.log(response)
}
fetchData()