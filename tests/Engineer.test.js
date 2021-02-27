// Define the module required
const Engineer = require('../library/Engineer');

// Define the test functions to:

// 1. Set Github account --> define new method in child object (Engineer is the child object of Employee)
test("Sets Github account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("value", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
})

// 2. Get value for Engineer role from constructor
test("Where function 'getRole()' returns \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("value", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
})

// 3. Get Github username from constructor
test("Gets Github username using the function 'getGithub()'", () => {
    const testValue = "GithubUser";
    const e = new Engineer("value", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
})