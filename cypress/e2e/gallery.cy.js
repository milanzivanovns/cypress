///// <reference types="Cypress" />


describe("gallery test", () => {

    it("Login test", () => {
        cy.visit("/");

        //Lociranje preko njegovog indexa u nizu elemenata
        //Tacka je skracenica za classe
        cy.get(".nav-link").eq(1).click();

        //Taraba je skracenica Id
        cy.get("#email").type("vivifytest@gmail.com");
        cy.get("#password").type("12345678");

        //Trazenje po klasi
        //cy.get(".btn").click();
        cy.get("button").click();


        //Usporavanje cypress-a na los nacin (wait)!
        //cy.wait(2000);

        // Logout
        //Asertacije isto mogu da uspore cypress..(ovo sada proveravamo da li se ucitalo nase Logout dugme) 
        cy.get(".nav-link").should("have.length", 4);

        //Negativna asertacija.(Kada se ulogujemo u url-u vise ne treba da ima /login! jer smo ulogovani)
        cy.url().should("not.contain", "/login");

        cy.get(".nav-link").eq(3).click();

        //Lociranje po ankoru i njegovom href-u (Ovde pretrazuje samo sve ankore)
        // cy.get("a[href ='/login']");

        //Nadji mi bilo sta sto ima tekstualno vrednost login (Ne raditi ovako jer pretrazuje celo stablo)
        // cy.contains("Login")

    });
    // Only kada stavimo ispred testa onda se pokrece samo taj test!
    it.only("Register test", () => {
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("Milan");
        cy.get("#last-name").type("Zivanov");
        cy.get("#email").type("milannn@gmail.com");
        cy.get("#password").type("12345678");
        cy.get("#password-confirmation").type("12345678");
        cy.get(":checkbox").check();
        cy.get("button").click();

    });

});