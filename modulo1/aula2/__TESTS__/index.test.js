
const Person = require("../person")
const Livro = require("../person")

// Objectos livros
var livro1 = new Livro("angola","luanda"," esse livro vai mudar sua vida")
var livro2 = new Livro("angola", "benguela","descrição qualquer kkk")

// Objectos Pessoas
var Maria = new Person("Maria Da Silva", "Maria@gmail.com", new Date())

var objTest = new Person("Maria Da Fernandes", "Preta@gmail.com", new Date())


// Descrição
describe("", ()=>{

    // Testes
    test("Verificação de objeto Maria com o objecto Test", ()=>{

        expect(Maria).toEqual(objTest)
    })

    test("Verificação do objeto livro 1 e livro2", ()=>{

        expect(livro1).toEqual(livro2)
    })
})

