//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('');
        cy.get('label[for="user"]').siblings().type(`pushingit${numero}`);
        cy.get('div[role="group"]').children('input#user').clear()
        cy.get('form').find('input[name="user"]').type(`pushingit${numero}`);
        cy.get('[type="password"]').type('123456!');
        cy.get('label').children('[value="Female"]').check({force:true});
        cy.get('div').find('select[name="day"]').select('5');
        cy.get('#month').select(6);
        cy.get('select[name="year"]').select('1995');
        cy.get('button').contains('Register').click();
        cy.wait(5000);
    });
});