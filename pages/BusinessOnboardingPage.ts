import { Page, expect } from '@playwright/test';

export class BusinessOnboardingPage {

    constructor(private page: Page) {}

    async selectOption(option: string) {
        await this.page.getByText(option).click();
    }

    async clickNext() {
        await this.page.locator('button:has-text("Next")').click();
    }

    async completeFlow() {

    
        await this.selectOption("Generate B2B Leads / Book Meetings");
        await this.clickNext();

     
        await this.selectOption("No, I have not");
        await this.clickNext();

      
        await this.selectOption("Cold Outreach");
        await this.clickNext();

       
        await this.selectOption("Google");
        await this.clickNext();
    }

    async verifyDashboard() {
        await expect(this.page).toHaveURL(/sequence|dashboard|home/);
    }
}