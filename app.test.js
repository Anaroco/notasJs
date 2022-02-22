import {notas} from './app.js';

describe('Que nota tienes?', () => {

    test("tiene que decir 'Muy deficiente'", () => {
        expect(notas(2)).toEqual("Muy deficiente");
    });

    test("tiene que decir 'Suficiente'", () => {
        expect(notas(5)).toEqual("Suficiente");
    });


    test("tiene que decir 'Bien'", () => {
    expect(notas(6)).toEqual("Bien");
    });

    test("tiene que decir 'Nota erronea'", () => {
        expect(notas(12)).toEqual("Nota erronea");
        });

})
