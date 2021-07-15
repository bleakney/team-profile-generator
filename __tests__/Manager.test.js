const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Mike', 1033, "mike@critterridder.com", 11);

    expect(manager.name).toBe('Mike');
    expect(manager.id).toBe(1033);
    expect(manager.email).toBe('mike@critterridder.com');
    expect(manager.officeNumber).toBe(11);
});

test("gets manager's role", () => {
    const manager = new Manager('Mike');
    expect(manager.getRole()).toBe('Manager');
});