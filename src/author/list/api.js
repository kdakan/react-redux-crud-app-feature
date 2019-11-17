const baseApiUrl = "http://localhost:3000/api/";
const authorsUrl = baseApiUrl + "authors.json";

function toJson(response) {
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return response.json();
}

export function getAuthorList() {
  return fetch(authorsUrl).then(toJson);
}

export function searchAuthorList(searchTerm) {
  return getAuthorList().then(json => {
    return json.filter(a => a.name.includes(searchTerm));
  });
}

