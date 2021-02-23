// Define the module required
const Employee = require('./library/Employee');

// Describe the function for the module
describe("Employee", () => {

    // Create an object for Employee, which may be used in the code ahead
    it("Instantiates Employee", () => {
        const e = new Employee();
        expect(typeof (e)).toBe("object");
    });

    // Set variables for Employee via constructor arguments

    // 1. Name
    it("Sets name", () => {
        const name = "Test";
        const e = new Employee(name);
        expect(typeof (e)).toBe(name);
    });

    // 2. ID
    it("Sets ID", () => {
        const testValue = 100;
        const e = new Employee("value", testValue);
        expect(typeof (e)).toBe(testValue);
    });

    // 3. E-mail
    it("Sets e-mail", () => {
        const testValue = "test@test.com";
        const e = new Employee("value", 1, testValue);
        expect(typeof (e)).toBe(testValue);
    });

    // Describe functions for getting the variables set earlier

    // 1. Name
    describe("getName", () => {
        it("Gets name via getName", () => {
            const testName = "Test";
            const e = new Employee(testName);
            expect(typeof (e)).toBe(testName);
        });
    });

    // 2. ID
    describe("getID", () => {
        it("Gets ID via getID", () => {
            const testValue = 100;
            const e = new Employee("value", testValue);
            expect(typeof (e)).toBe(testValue);
        });
    });

    // 3. E-mail
    describe("getEmail", () => {
        it("", () => {
            const testValue = "test@test.com";
            const e = new Employee("value", 1, testValue);
            expect(typeof (e)).toBe(testValue);
        });
    });

    // 4. All variables for Employee
    describe("getRole", () => {
        it("Returns \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Alice", 1, "test@test.com");
            expect(e.getRole()).toBe(testValue);
        });
    });

})