const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Lil Ricky', 49, "lilricky@biglilrickys.com", 'lilricky94');

    expect(engineer.name).toBe('Lil Ricky');
    expect(engineer.id).toBe(49);
    expect(engineer.email).toBe('lilricky@biglilrickys.com');
    expect(engineer.github).toBe('lilricky94');
});

test("returns engineer's github", () => {
    const engineer = new Engineer('Lil Ricky', 49, "lilricky@biglilrickys.com", 'lilricky94');

    expect(engineer.getGithub()).toBe('lilricky94');
});

test("returns engineer's role", () => {
    const engineer = new Engineer('Lil Ricky');

    expect(engineer.getRole()).toBe('Engineer');
})