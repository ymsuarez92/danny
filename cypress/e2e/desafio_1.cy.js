/// <reference types="cypress" />
describe("Desafio 1", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Completar tarea', () =>{
        cy.visit('');
        cy.get('label[for="user"]').siblings().type(`pushingit${numero}`);
        cy.get('[type="password"]').type('123456!');
        cy.get('label').children('[value="Female"]').check({force:true});
        cy.get('div').find('select[name="day"]').select('5');
        cy.get('#month').select(6);
        cy.get('select[name="year"]').select('1995');
        cy.get('button').contains('Register').click();
        cy.get('a#todolistlink').click();
        cy.get('input#task').type('Primera tarea');
        cy.get('button').contains('Send').click();
        cy.get('p').contains('Primera tarea').click();
    });
});