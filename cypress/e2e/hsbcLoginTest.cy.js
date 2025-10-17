import homePage from "../pages/hsbcHomePage.cy"
import loginPage from "../pages/hsbcLoginPage.cy"

describe("HSBC Login Page Automation", () => {
    before(() => {
        cy.fixture("example").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(() => {
        cy.visit("/");
    });

    it("Validate HSBC Home Page and Login Flow", () => {
        // Step 2: Validate HSBC Logo
        homePage.validateLogoVisible();

        // Step 3: Validate Home Page Title
        homePage.validateHomePageTitle(data.homepageTitle);

        // Step 4: Click on Login button
        homePage.clickLoginButton();

        // Step 5: Validate Log On header
        loginPage.validateHeader();

        // Step 6: Check Continue button exists
        loginPage.validateContinueButtonExists();

        // Step 7: Validate Continue button is disabled
        loginPage.validateContinueButtonDisabled();

        // Step 8: Type random email in username field
        loginPage.typeUsername(data.username);

        // Step 9: Validate Continue button is enabled
        loginPage.validateContinueButtonEnabled();

        // Step 10: Validate Remember me checkbox not checked
        loginPage.validateRememberMeUnchecked();

        // Step 11: Validate tooltip is present
        loginPage.validateTooltipPresent();

        // Step 12: Click on the tooltip
        loginPage.clickTooltip();

        // Step 13: Validate username header in popup
        loginPage.validatePopupHeader();

        // Step 14: Validate Close button
        loginPage.validatePopupCloseButton();

        // Step 15: Click on Close button
        loginPage.closePopup();
    });

    /*

    it("Validate HSBC Home Page and Login Flow", () => {
        // Step 2: Validate HSBC Logo
        homePage.validateLogoVisible();

        // Step 3: Validate Home Page Title
        homePage.validateHomePageTitle(data.homepageTitle);
    })

    it("Validate HSBC Home Page and Login Flow", () => {
        // Step 2: Validate HSBC Logo
        homePage.validateLogoVisible();

        // Step 3: Validate Home Page Title
        homePage.validateHomePageTitle(data.homepageTitle);
    })

    */
});