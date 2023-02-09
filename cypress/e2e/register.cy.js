/// <reference types="Cypress" />

import { registerPage } from "../page_objects/registerPage.js";

const credetials = {
firstName: "Milan",
lastName: "Zivanov",
email: "vivifytest@gmail.com",
password: "12345678"

}

describe("Register test", () => {
    
    before("visit app and click the register link", () => {
        cy.visit("/");
        registerPage.registerLink.click();
        cy.url().should("contain", "/register");
        
    });

    it("Register user", () => {
        registerPage.registerUserWithValidData(credetials.firstName, credetials.lastName, credetials.email, credetials.password, credetials.password);
    });

});