class LoginPage {

    get loginLink() {
        return cy.get("a[href='/login']");
    }

    get loginPageHeading() {
        return cy.get("h1");
    }

    get emailInput() {
        return cy.get("#email");
    }

    get passwordInput() {
        return cy.get("#password");
    }

    get submintBtn() {
        return cy.get("button");
    }

    get errorMessage() {
        return cy.get(".alert");
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submintBtn.click();
    }
}

export const loginPage = new LoginPage();