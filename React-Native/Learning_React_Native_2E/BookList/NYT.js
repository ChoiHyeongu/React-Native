const API_KEY = "atTlnExPf4j8gsrGVG3d0KY2AhTFFRna";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

function fetchBooks(list_name = LIST_NAME) {
  let url = `${API_STEM}/${LIST_NAME}?response-format=json&api-key=${API_KEY}`;
  return fetch(url)
    .then(response => {
        response.json();
        console.log(url);
        console.log(response.json());
    })
    .then(responseJson => {
      return responseJson.results;
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchBooks: fetchBooks };