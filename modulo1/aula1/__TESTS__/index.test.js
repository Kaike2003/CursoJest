// Importando 
const numero = require("../index")


// Passando valores através de objectos para testes
const valores = {
    nome: "Angola",
    idade: 30
}


// Descrição da suite de teste
describe("Calculadora de area de quadrado", ()=>{

test("Passado o valor 3, isto deverá retornar valor 9", ()=>{

    expect(numero(3)).toBe(9)

})

test("Passado o valor 17, isto deverá retornar 289", ()=>{

    expect(numero(17)).toBe(289)

})

test("Passado o valor 4, isto deverá retornar 16", ()=>{

    expect(numero(4)).toBe(16)
    
})

test("Passo o valor 2, isto deverá retornar 4", ()=>{

    expect(numero(2)).toBe(4)
})

test("O nome passado deve ser Angola", ()=>{

    expect(valores.nome).toBe("Angola")
})


test('A idade passada deve ser 30', () => {
    
    expect(valores.idade).toBe(30)
});

})


