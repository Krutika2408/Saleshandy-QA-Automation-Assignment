import { expect, Page } from '@playwright/test';

export class SignupPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://my.saleshandy.com/login', {
            waitUntil: 'networkidle',
            timeout: 60000
        });
    }

    async clickSignUp() {
        await this.page.getByRole('link', { name: /sign up/i }).click();
        await expect(this.page).toHaveURL(/signup/);
    }

    async fillSignupForm(
        firstName: string,
        lastName: string,
        email: string,
        password: string
    ) {

        await this.page.getByPlaceholder('John').fill(firstName);

        await this.page.getByPlaceholder('Doe').fill(lastName);

        await this.page.getByPlaceholder('johndoe@example.com').fill(email);

        await this.page.getByPlaceholder('Minimum 8 Characters').fill(password);
    }

    async clickCreateAccount() {
        await this.page.getByRole('button', { name: /^Sign up$/ }).click();
    }

    async verifySignupPage() {
        await expect(this.page).toHaveURL(/signup/);
    }
}