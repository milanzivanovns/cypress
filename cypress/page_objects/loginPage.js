class LoginPage {

    get loginLink() {
        return cy.get("a[href='/login']");
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

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submintBtn.click();
    }
}

export const loginPage = new LoginPage();