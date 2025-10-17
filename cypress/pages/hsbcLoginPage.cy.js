class HSBCLoginPage {
    // Locators Section
    getHeader() {
        return cy.xpath("//h1[contains(text(),'Log on')]");
    }

    getContinueButton() {
        return cy.xpath("//button[contains(@id,'continue') or contains(text(),'Continue')]");
    }

    getUsernameField() {
        return cy.xpath("//input[contains(@id,'username') or @name='username']");
    }

    getRememberMeCheckbox() {
        return cy.xpath("//input[@type='checkbox']");
    }

    getTooltipIcon() {
        return cy.xpath("//button[contains(@aria-label,'username help') or contains(@aria-label,'tooltip')]");
    }

    getPopupHeader() {
        return cy.xpath("//h2[contains(text(),'username') or contains(text(),'Username')]");
    }

    getPopupCloseButton() {
        return cy.xpath("//button[contains(text(),'Close')]");
    }

    // Actions Section
    validateHeader() {
        this.getHeader().should("contain.text", "Log on");
    }

    validateContinueButtonExists() {
        this.getContinueButton().should("exist");
    }

    validateContinueButtonDisabled() {
        this.getContinueButton().should("be.disabled");
    }

    typeUsername(email) {
        this.getUsernameField().type(email);
    }

    validateContinueButtonEnabled() {
        this.getContinueButton().should("be.enabled");
    }

    validateRememberMeUnchecked() {
        this.getRememberMeCheckbox().should("not.be.checked");
    }

    validateTooltipPresent() {
        this.getTooltipIcon().should("be.visible");
    }

    clickTooltip() {
        this.getTooltipIcon().click({ force: true });
    }

    validatePopupHeader() {
        this.getPopupHeader().should("contain.text", "Username");
    }

    validatePopupCloseButton() {
        this.getPopupCloseButton().should("be.visible");
    }

    closePopup() {
        this.getPopupCloseButton().click({ force: true });
    }
}

export default new HSBCLoginPage();