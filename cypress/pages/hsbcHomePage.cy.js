class HSBCHomePage {
    //Locators
    getLogo() {
        return cy.xpath("//img[@alt='HSBC India Bank']");
    }

    getLoginButton() {
        return cy.xpath("//a[contains(text(), 'Log On')]");
    }

    //Actions
    validateLogoVisible() {
        this.getLogo().should("be.visible");
    }

    validateHomePageTitle(expectedTitle) {
        cy.title().should("eq", expectedTitle);
    }

    clickloginButton() {
        this.getLoginButton().click({ force: true });
    }

}

export default new HSBCHomePage();