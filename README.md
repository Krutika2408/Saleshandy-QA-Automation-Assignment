# Saleshandy QA Automation Assignment

## Project Overview

This project is an automation framework developed as part of the Saleshandy SDET-1 QA Automation Assignment.

The framework is built using Playwright with TypeScript and follows the Page Object Model (POM) design pattern for better maintainability and reusability.

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub

---

## Project Structure

```
.
├── data
│   └── signupData.ts
├── pages
│   ├── SignupPage.ts
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   ├── PersonalOnboardingPage.ts
│   ├── BusinessOnboardingPage.ts
│   ├── ClientOnboardingPage.ts
│   └── OnboardingFlow.ts
├── tests
│   └── signup.spec.ts
├── playwright.config.ts
└── package.json
```

---

## Framework Design

- Page Object Model (POM)
- Reusable methods
- Test data separated from test scripts
- Modular onboarding pages
- Easy to extend for future scenarios

---

## How to Install

```bash
npm install
```

---

## Run Tests

Run all tests

```bash
npm test
```

Run headed mode

```bash
npm run test:headed
```

Open report

```bash
npm run report
```

---

## Features Covered

- Login page navigation
- Signup page validation
- Reusable Signup Page Object
- Personal onboarding flow
- Business onboarding structure
- Client onboarding structure

---

## Assumptions

- Saleshandy UI may change over time.
- Some onboarding steps are dynamic.
- Test data uses unique email IDs to avoid duplicate user issues.

---

## Future Improvements

- API based authentication
- Storage State login reuse
- CI/CD integration
- Cross-browser execution
- Data driven testing

---

## Author

Krutika Choudhary