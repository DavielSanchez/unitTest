const greet = require("./index");

test("Debe devolver 'Hola Mundo'", () => {
    expect(greet()).toBe("Hola Mundo");
});