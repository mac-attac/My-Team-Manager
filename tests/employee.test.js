const { Employee } = require("../lib/classes");

test("check name of employee", () => {
  const employee = new Employee("Michael Jordan", 23, "mjgoat@airjordan.com");

  expect(employee.name).toBe("Michael Jordan");
});

test("check id of employee", () => {
  const employee = new Employee("Michael Jordan", 23, "mjgoat@airjordan.com");

  expect(employee.id).toBe(23);
});

test("check email of employee", () => {
  const employee = new Employee("Michael Jordan", 23, "mjgoat@airjordan.com");

  expect(employee.email).toBe("mjgoat@airjordan.com");
});

test("check role of employee", () => {
  const employee = new Employee("Michael Jordan", 23, "mjgoat@airjordan.com");

  expect(employee.getRole()).toBe("Employee");
});
