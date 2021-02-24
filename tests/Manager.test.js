// Define the module required
const Manager = require('./library/Manager');

// Define the test functions to:

// 1. Set office phone number --> define new method in child object (Manager is the child object of Employee)
test("Set office phone number via constructor", () => {
    const testValue = "officeNum";
    const e = new Manager("value", 1, "test@test.com", testValue);
    expect(e.office).toBe(testValue);
})

// 2. Get value for Manager role from constructor
test("Where function 'getRole()' returns \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("value", 1, "test@test.com", "officeNum");
    expect(e.getRole()).toBe(testValue);
})

// 3. Get office phone number from constructor
test("Gets office phone number using the function 'getOfficeNum()'", () => {
    const testValue = "officeNum";
    const e = new Manager("value", 1, "test@test.com", testValue);
    expect(e.getOfficeNum()).toBe(testValue);
})