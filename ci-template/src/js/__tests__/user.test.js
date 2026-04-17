import { loadUser, saveUser } from "../user";
import { httpGet } from "../http";

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
