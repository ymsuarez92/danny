/// <reference types = "cypress"/>

describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000);
    let nombre = `daniela${numero}`;
    
    it('Registro de usuario', () =>{
        cy.visit('');
        cy.get('#user').type(nombre);
        cy.get('#pass').type('12345!');
        cy.get('[value = "Other"]').check({force:true});
        cy.get('#day').select("2");
        cy.get('#month').select("5");
        cy.get('#year').select(67);
        cy.get('#submitForm').click();
        //crear un test que permita registrarse en la pagina!
        //Recorda usar npx cypress open para abrir la interfaz de usuario
        //Para seleccionar el genero utiliza el siguiente selector cy.get("[value='Male']") //Female // recuerden el force true
    });
    
    it('Iniciar sesión', () =>{
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
    });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos 
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia sesion'

