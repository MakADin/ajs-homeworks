import { httpGet } from "./http";
import fetchData from "./http.js";

export function loadUser(id) {
  const data = httpGet(`http://server:8080/users/${id}`);
  return JSON.parse(data);
}

// eslint-disable-next-line no-unused-vars
export function saveUser(user) {
  if (user.id) {
    return "Success";
  }
  throw new Error("Unimplemented");
}

export function getLevel(userId) {
  try {
    const response = fetchData(`https://server/user/${userId}`);

    // TODO: логика обработки
    if (response.status === "ok") {
      return `Ваш текущий уровень: ${response.level}`;
    }
  } catch (e) {}
  return `Информация об уровне временно недоступна`;
}
