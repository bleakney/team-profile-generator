const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Robert De Niro', 85, "itsmrfamousguy@imdb.com", 'University of Phoenix');

    expect(intern.name).toBe('Robert De Niro');
    expect(intern.id).toBe(85);
    expect(intern.email).toBe('itsmrfamousguy@imdb.com');
    expect(intern.school).toBe('University of Phoenix');
});

test("returns intern's school name", () => {
    const intern = new Intern('Robert De Niro', 85, "itsmrfamousguy@imdb.com", 'University of Phoenix');

    expect(intern.getSchool()).toBe('University of Phoenix');
});

test("returns intern's role", () => {
    const intern = new Intern('Robert De Niro');

    expect(intern.getRole()).toBe('Intern');
});