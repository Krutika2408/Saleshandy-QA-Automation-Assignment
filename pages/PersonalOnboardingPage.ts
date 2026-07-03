import { Page, expect } from '@playwright/test';

export class PersonalOnboardingPage {

    constructor(private page: Page) {}

    async selectOption(option: string) {
        await this.page.getByText(option, { exact: true }).click();
    }

    async clickNext() {
        await this.page.getByRole('button', { name: 'Next' }).click();
    }

    async completeFlow() {

        // Goal
        await this.selectOption("Generate B2B Leads / Book Meetings");
        await this.clickNext();

        // Experience
        await this.selectOption("No, I have not");
        await this.clickNext();

        // Use case
        await this.selectOption("Cold Outreach");
        await this.clickNext();

        // Discovery source
        await this.selectOption("Google");
        await this.clickNext();
    }

    async verifyDashboard() {
        await expect(this.page).toHaveURL(/dashboard|sequence|home/);
    }
}