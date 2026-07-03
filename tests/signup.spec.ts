import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { signupData } from '../data/signupData';

test('Saleshandy Signup Flow', async ({ page }) => {

    const signup = new SignupPage(page);

    await signup.navigate();

    await signup.clickSignUp();

    await signup.fillSignupForm(
        signupData.firstName,
        signupData.lastName,
        (signupData as any).email,
        signupData.password
    );

});