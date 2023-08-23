//importar la pagina todoListPage
//importar la pagina loginPage
import { LoginPage } from "../support/pages/loginPage";
import { ToDoListPage } from "../support/pages/todoListPage";

describe('Actividad complementaria 6', () => { 
    //generar una instancia de la clase todoListPage
    //generar una instancia de la clase loginPage
        const loginPage = new LoginPage();
        const toDoListPage = new ToDoListPage();

         beforeEach("Actividad complementaria 5", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.writeUser('pushingit'); // utilizar la clase loginPage para ingresar el usuario
            loginPage.writePassword('123456!'); // utilizar la clase loginPage para ingresar  la contraseña
            loginPage.clickLoginButton(); // utilizar la clase loginPage hacer click en 'Log in'
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            toDoListPage.getAllButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.getCompletedButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.getActiveButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            toDoListPage.getRemoveAllButton().should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        });
     });