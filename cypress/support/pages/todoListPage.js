export class ToDoListPage{
    constructor(){
        this.buttonAll = '#all';
        this.buttonCompleted = '#completed';
        this.buttonActive = '#active';
        this.buttonRemoveAll = '#removeAll';
    }

    getAllButton(){
        return cy.get(this.buttonAll);
    };

    getCompletedButton(){
        return cy.get(this.buttonCompleted);
    };

    getActiveButton(){
        return cy.get(this.buttonActive);
    };
    
    getRemoveAllButton(){
        return cy.get(this.buttonRemoveAll);
    };
}