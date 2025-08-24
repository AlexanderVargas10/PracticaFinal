const saludar = require("./saludar");

test("La función saludar devuelve el saludo correcto", () => {
    expect(saludar("Mundo")).toBe("Hola Mundo");
});
