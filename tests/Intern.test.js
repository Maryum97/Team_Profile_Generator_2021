// Define the module required
const Intern = require('../library/Intern');

// Define the test functions to:

// 1. Set school name --> define new method in child object (Intern is the child object of Employee)
test("Set school name via constructor", () => {
    const testValue = "schoolName";
    const e = new Intern("value", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
})

// 2. Get value for Intern role from constructor
test("Where function 'getRole()' returns \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("value", 1, "test@test.com", "schoolName");
    expect(e.getRole()).toBe(testValue);
})

// 3. Get school name from constructor
test("Gets school name using the function 'getSchoolName()'", () => {
    const testValue = "schoolName";
    const e = new Intern("value", 1, "test@test.com", testValue);
    expect(e.getSchoolName()).toBe(testValue);
})