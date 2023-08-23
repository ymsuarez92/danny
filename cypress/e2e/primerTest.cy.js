/// <reference types = "cypress"/>

describe ('Primer test con cypress', ()=>{
    const numeroRandom = Math.floor(Math.random()*1000)
    let nombre = `dany${numeroRandom}` // plantillas para concatenar sin el +
    
    it('Debería registrar un usuario satisfactoriamente', ()=>{
        cy.visit('') // cuando está vacía la busca en el archivo cypress.config.js atributo baseUrl
        cy.get('#user').type(nombre)
        cy.get('#pass').type('123456!')
        cy.get('[value = "Female"]').check({force:true})
        cy.get('#day').select("27") // texto visible
        cy.get('#month').select("11") //value
        cy.get('#year').select(74) // position-index
        cy.get('#submitForm').click()
    })
})