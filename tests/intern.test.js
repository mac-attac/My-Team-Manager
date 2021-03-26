const { Employee, Intern } = require("../lib/classes");

test("check name of intern", () => {
  const intern = new Intern(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "UNC"
  );

  expect(intern.name).toBe("Michael Jordan");
});

test("check id of intern", () => {
  const intern = new Intern(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "UNC"
  );

  expect(intern.id).toBe(23);
});

test("check email of intern", () => {
  const intern = new Intern(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "UNC"
  );

  expect(intern.email).toBe("mjgoat@airjordan.com");
});

test("check school of intern", () => {
  const intern = new Intern(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "UNC"
  );

  expect(intern.school).toBe("UNC");
});

test("check role of intern", () => {
  const intern = new Intern(
    "Michael Jordan",
    23,
    "mjgoat@airjordan.com",
    "UNC"
  );

  expect(intern.getRole()).toBe("Intern");
});
