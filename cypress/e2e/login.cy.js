/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

const credetials = {
    email: "vivifytest@gmail.com",
    password: "12345678"
}

describe("Login test", () => {

    before("visit app and click the login link", () => {
        cy.visit("/");
        loginPage.loginLink.click();
    });

    it("Login user", () => {
        loginPage.login(credetials.email, credetials.password);
    });

});