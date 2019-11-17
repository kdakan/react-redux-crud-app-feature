const baseApiUrl = "http://localhost:3000/api/";
const coursesUrl = baseApiUrl + "courses.json";

function toJson(response) {
  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  return response.json();
}

export function getCourse(id) {
  return fetch(coursesUrl).then(toJson).then(json => {
    const courses = json.filter(a => a.id === id);
    if (courses.length > 1) {
      throw new Error("DB error, fetched more than a single record.");
    }
    return courses.length === 1 ? courses[0] : null;
  });
}

export function searchCourses(searchTerm) {
  return fetch(coursesUrl).then(toJson).then(json => {
    return json.filter(a => a.title.includes(searchTerm));
  });
}

export function saveCourse(course) {
  return fetch(coursesUrl, {
    method: course.id === null ? "POST" : "PUT",
    body: JSON.stringify(course)
  }).then(toJson);
}

export function deleteCourse(course) {
  return fetch(coursesUrl, {
    method: "DELETE",
    body: JSON.stringify(course)
  }).then(toJson);
}
