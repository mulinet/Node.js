"use strict";
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("wait 0.1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolve(user);
    }, 100);
  });
}

test("fetch a user", () => {
  fetchUser(2).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

test("fetch a user", () => {
  return fetchUser(2).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

test("fetch a user", async () => {
  const user = await fetchUser(2);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});

test("fetch a user", async () => {
  const user = await fetchUser(2);
  expect(user).toEqual({
    id: 2,
    name: "User2",
    email: "2@test.com",
  });
});
