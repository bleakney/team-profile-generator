const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Robert De Niro', 85, "itsmrfamousguy@imdb.com", 'University of Phoenix');

    expect(intern.name).toBe('Robert De Niro');
    expect(intern.id).toBe(85);
    expect(intern.email).toBe('itsmrfamousguy@imdb.com');
    expect(intern.school).toBe('University of Phoenix');
});

test('gets name of intern', () => {
    const intern = new Intern('Robert De Niro', 85, "itsmrfamousguy@imdb.com", 'University of Phoenix');

    expect(intern.getName()).toEqual(expect.any(String));
});

test("gets intern's id", () => {
    const intern = new Intern('Robert De Niro', 85, "itsmrfamousguy@imdb.com", 'University of Phoenix');

    expect(intern.getId()).toEqual(expect.any(Number));
});

test("gets intern's email address", () => {
    const intern = new Intern('Robert De Niro', 85, "itsmrfamousguy@imdb.com", 'University of Phoenix');

    expect(intern.getEmail()).toEqual(expect.stringContaining('@'));
});


test("returns intern's school name", () => {
    const intern = new Intern('Robert De Niro', 85, "itsmrfamousguy@imdb.com", 'University of Phoenix');

    expect(intern.getSchool()).toBe('University of Phoenix');
});

test("returns intern's role", () => {
    const intern = new Intern('Robert De Niro');

    expect(intern.getRole()).toBe('Intern');
});
