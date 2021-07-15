const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Snake', 34, 'snake@bananahammock.com' );

    expect(employee.name).toBe('Snake');
    expect(employee.id).toBe(34);
    expect(employee.email).toBe('snake@bananahammock.com');
});

test('gets name of employee', () => {
    const employee = new Employee('Snake', 34, 'snake@bananahammock.com' );

    expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employee's id", () => {
    const employee = new Employee('Snake', 34, 'snake@bananahammock.com' );

    expect(employee.getId()).toEqual(expect.any(Number));
});

test("gets employee's email address", () => {
    const employee = new Employee('Snake', 34, 'snake@bananahammock.com' );

    expect(employee.getEmail()).toEqual(expect.stringContaining('@'));
});

test("returns employee's role", () => {
    const employee = new Employee('Snake', 34, 'snake@bananahammock.com');

    expect(employee.getRole()).toBe('Employee');
});