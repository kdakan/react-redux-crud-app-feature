const baseApiUrl = "http://localhost:3000/api/";
const authorsUrl = baseApiUrl + "authors.json";
const coursesUrl = baseApiUrl + "courses.json";

function toJson(response) {
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return response.json();
}

export function getAuthor(id) {
  return fetch(authorsUrl).then(toJson).then(json => {
    const authors = json.filter(a => a.id === id);
    if (authors.length > 1) {
      throw new Error("DB error, fetched more than a single record.");
    }
    return authors.length === 1 ? authors[0] : null;
  });
}

export function saveAuthor(author) {
  return fetch(authorsUrl, {
    method: author.id === null ? "POST" : "PUT",
    body: JSON.stringify(author)
  }).then(toJson);
}

export function deleteAuthor(author) {
  return fetch(authorsUrl, {
    method: "DELETE",
    body: JSON.stringify(author)
  }).then(toJson);
}

export function getAuthorCourses(authorName) {
  return fetch(coursesUrl).then(toJson).then(json => {
    return json.filter(a => a.authorsFullnames.includes(authorName));
  });
}

