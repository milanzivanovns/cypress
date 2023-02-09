/// <reference types="Cypress" />

const locators = require("../fixtures/locators.json");

describe("Gallery test", () => {

    // it("Login to gallery", () => {
    //     cy.visit("/");
    //     //Dolazak do objekta *locators
    //     cy.get(locators.login.loginButton).click(); // cy.get('a[href="/login"]').click()
    //     cy.get(locators.commonFormElements.emailInput).type("vivifytest@gmail.com"); //   cy.get("#email").type("vivifytest@gmail.com"); 
    //     cy.get(locators.commonFormElements.passwordInput).type("12345678"); // cy.get("#password").type("12345678");
    //     cy.get(locators.navBar.loginButton).click(); // cy.get("button").click();
    // });


    //Objekat
    let userData = {
        firstName: "Milan",
        lastName: "Zivanov",
        email: "milan.zivanov.ns@gmail.com",
        password: "12345678"
    };


    //Before each se ponavlja nakon svakog ita, a samo before on se ponavalja samo jednom, 
    //ako imamo vise stvari koje se ponavljaju onda koristimo beforeEach ako je smo jedna stvar ona before
    beforeEach("visit app and click on the register link", () => {
        cy.visit("/");
        cy.get(locators.navBar.registerButton).eq(2).click();
    })
        
    it.only("Register user", () => {
       // cy.visit("/");
        //Dolazak do objekta *locators
       // cy.get(locators.navBar.registerButton).eq(2).click();
        cy.get(locators.register.firstNameInput).type(userData.firstName);
        cy.get(locators.register.lastNameInput).type(userData.lastName);
        cy.get(locators.commonFormElements.emailInput).type(userData.email);
        cy.get(locators.commonFormElements.passwordInput).type(userData.password);
        cy.get(locators.register.passwordConfirmationInput).type(userData.password);
        cy.get(locators.register.tosCheckBox).check();
        cy.get(locators.commonFormElements.submitButton).click();

    });

    it.only("Register with wrong E-mail format", () => {
        //Dolazak do objekta *locators
        cy.get(locators.register.firstNameInput).type("Milan");
        cy.get(locators.register.lastNameInput).type("Zivanov");
        cy.get(locators.commonFormElements.emailInput).type("milan.milan.com");
        cy.get(locators.commonFormElements.passwordInput).type("12345678");
        cy.get(locators.register.passwordConfirmationInput).type("12345678");
        cy.get(locators.register.tosCheckBox).check();
        cy.get(locators.commonFormElements.submitButton).click();

    });

    it.only("Register with wrong conformation of password", () => {
        //Dolazak do objekta *locators
        cy.get(locators.register.firstNameInput).type("Milan");
        cy.get(locators.register.lastNameInput).type("Zivanov");
        cy.get(locators.commonFormElements.emailInput).type("milan@gmail.com");
        cy.get(locators.commonFormElements.passwordInput).type("12345678");
        cy.get(locators.register.passwordConfirmationInput).type("87654321");
        cy.get(locators.register.tosCheckBox).check();
        cy.get(locators.commonFormElements.submitButton).click();
        cy.url().should("contain", "/register");

    });


    
});