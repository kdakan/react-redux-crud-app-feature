const baseApiUrl = "http://localhost:3000/api/";
const coursesUrl = baseApiUrl + "courses.json";

function toJson(response) {
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return response.json();
}

export function getCourseList() {
  return fetch(coursesUrl).then(toJson);
}

export function searchCourseList(searchTerm) {
  return getCourseList().then(json => {
    return json.filter(a => a.title.includes(searchTerm));
  });
}

