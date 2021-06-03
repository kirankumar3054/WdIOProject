const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await expect (browser).toHaveTitle('The Internet')

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should NOT login with Invalid credentials', async () => {
        await LoginPage.open();
        await expect (browser).toHaveTitle('The Internet')

        await LoginPage.login('invalid', 'invalid');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
    });

});


