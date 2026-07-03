import { Page, expect } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://my.saleshandy.com/login', {
            waitUntil: 'networkidle'
        });
    }

    async clickSignUpLink() {
        await this.page.getByRole('link', { name: /sign up/i }).click();
    }

    async verifyLoginPage() {
        await expect(this.page).toHaveURL(/login/);
    }
}