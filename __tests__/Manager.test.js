const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Mike', 1033, "mike@critterridder.com", 11);

    expect(manager.name).toBe('Mike');
    expect(manager.id).toBe(1033);
    expect(manager.email).toBe('mike@critterridder.com');
    expect(manager.officeNumber).toBe(11);
});

test('gets name of manager', () => {
    const manager = new Manager('Mike', 1033, "mike@critterridder.com", 11);

    expect(manager.getName()).toEqual(expect.any(String));
});

test("gets manager's id", () => {
    const manager = new Manager('Mike', 1033, "mike@critterridder.com", 11);

    expect(manager.getId()).toEqual(expect.any(Number));
});

test("gets manager's email address", () => {
    const manager = new Manager('Mike', 1033, "mike@critterridder.com", 11);
    expect(manager.getEmail()).toEqual(expect.stringContaining('@'));
});


test("gets manager's role", () => {
    const manager = new Manager('Mike');
    expect(manager.getRole()).toBe('Manager');
});