const { Employee, Engineer } = require("../lib/classes");

test("check name of engineer", () => {
  const engineer = new Engineer(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "mjgoat23"
  );

  expect(engineer.name).toBe("Michael Jordan");
});

test("check id of engineer", () => {
  const engineer = new Engineer(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "mjgoat23"
  );

  expect(engineer.id).toBe(23);
});

test("check email of engineer", () => {
  const engineer = new Engineer(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "mjgoat23"
  );

  expect(engineer.email).toBe("mjgoat@airjordan.com");
});

test("check github username of engineer", () => {
  const engineer = new Engineer(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "mjgoat23"
  );

  expect(engineer.github).toBe("mjgoat23");
});

test("check role of engineer", () => {
  const engineer = new Engineer(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "mjgoat23"
  );

  expect(engineer.getRole()).toBe("Engineer");
});
