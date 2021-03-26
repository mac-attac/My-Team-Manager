const { Manager, Employee } = require("../lib/classes");

test("check name of manager", () => {
  const manager = new Manager(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "1998"
  );

  expect(manager.name).toBe("Michael Jordan");
});

test("check id of manager", () => {
  const manager = new Manager(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "1998"
  );

  expect(manager.id).toBe(23);
});

test("check email of manager", () => {
  const manager = new Manager(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "1998"
  );

  expect(manager.email).toBe("mjgoat@airjordan.com");
});

test("check office number of manager", () => {
  const manager = new Manager(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "1998"
  );

  expect(manager.getOfficeNumber()).toBe("1998");
});

test("check role of manager", () => {
  const manager = new Manager(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "1998"
  );

  expect(manager.getRole()).toBe("Manager");
});
