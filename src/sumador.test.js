import {sumar, multiplicar} from './sumador.js';

describe('Sumar', () => {
  it('deberia sumar dos numeros', () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("debería multiplicar dos números", () => {
    expect(multiplicar(10, 2)).toEqual(20);
  });

});


