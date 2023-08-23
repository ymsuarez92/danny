// A continuación referencia que permite traer los métodos de cypress y no tener error de tipeo
/// <reference types="cypress"/>

describe('Mocha', ()=>{
    let typel = {
        large: "10 martes"
    }

    it.skip("Primer test con cypress usando Mocha", ()=>{
        var data = {
            curso: "Pushing It",
            profesor: "Fabrizio Otranto",
            typel
        }
        cy.log(data)
    })
    it("Segundo test con cypress usando Mocha", ()=>{
        typel = {
            large: "8 viernes"
        }
        cy.log(typel)
    })
})

it("Tercer test con cypress usando Mocha", ()=>{
    cy.log('Tercer test con cypress')
})