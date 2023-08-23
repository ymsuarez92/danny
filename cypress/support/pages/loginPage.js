export class LoginPage{
    constructor(){
        this.userInput = '#user';
        this.passInput = '#pass';
        this.loginButton = '#submitForm';
    }

    writeUser(user){
        cy.get(this.userInput).type(user);
    };

    writePassword(pass){
        cy.get(this.passInput).type(pass);
    };

    clickLoginButton(){
      ;  cy.get(this.loginButton).click();
    }
}