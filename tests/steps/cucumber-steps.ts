const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');

Given('the user is on the Google page', async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    await this.page.goto("https://www.google.com/")
});

When('the user input the word Amazon', async () => {
    await this.page.getByLabel('Search', { exact: true }).click();
    await this.page.getByLabel('Search', { exact: true }).fill('amazon');
    await this.page.keyboard.press("Enter");
});

When('the user click the Amazon result link', async () => {
    await this.page.getByRole('link', { name: 'Amazon.com. Spend less. Smile' }).click();
});

Then('the user should be navigated to the Amazon page', async () => {
    await expect(this.page.getByLabel('Amazon', { exact: true })).toBeVisible();
});

