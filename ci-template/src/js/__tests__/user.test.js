import { loadUser, saveUser, getLevel } from "../user";
import fetchData, { httpGet } from "../http";

jest.mock("../http");

beforeEach(() => {
  jest.resetAllMocks();
});

test("should call loadUser once", () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith("http://server:8080/users/1");
});

test("should save user", () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = saveUser({ id: 1 });
  expect(response).toBe("Success");
});

test("should throw error, if user has no id", () => {
  const userWithoutId = { name: "pivozavr" };
  expect(() => {
    saveUser(userWithoutId);
  }).toThrow();
});

test("ответ сервера о статусе OK", () => {
  fetchData.mockReturnValue({ status: "ok", level: 1 });

  const result = getLevel(1);

  expect(result).toBe(`Ваш текущий уровень: 1`);
});

test("проверка на ответ сервера - ERROR", () => {
  fetchData.mockReturnValue({ status: "error"});

  const result = getLevel(1);
  expect(result).toBe(`Информация об уровне временно недоступна`);
});

test("ошибка - сервер не доступен", () => {
  fetchData.mockImplementation(() => {
    throw new Error('server error');
  })
  const result = getLevel(1);
  expect(result).toBe(`Информация об уровне временно недоступна`);
})
