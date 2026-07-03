import { PersonalOnboardingPage } from './PersonalOnboardingPage';
import { BusinessOnboardingPage } from './BusinessOnboardingPage';
import { ClientOnboardingPage } from './ClientOnboardingPage';

export class OnboardingFlow {

    constructor(private page: any) {}

    async run(accountType: string) {

        if (accountType === "Personal Use") {
            const personal = new PersonalOnboardingPage(this.page);
            await personal.completeFlow();
        }

        else if (accountType === "Business") {
            const business = new BusinessOnboardingPage(this.page);
            await business.completeFlow();
        }

        else if (accountType === "Client") {
            const client = new ClientOnboardingPage(this.page);
            await client.completeFlow();
        }

        else {
            throw new Error("Invalid account type: " + accountType);
        }
    }
}