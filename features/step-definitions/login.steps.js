const { Given, When, Then } = require('@cucumber/cucumber');
const playwright = require('playwright');
const assert = require('assert');

let browser, context, page;

Given('I navigate to the Sauce Demo login page', async function () {
  browser = await playwright.chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('I enter valid username and password', async function () {
  await page.fill('input[data-test="username"]', 'standard_user');
  await page.fill('input[data-test="password"]', 'secret_sauce');
});

When('I click the login button', async function () {
  await page.click('input[data-test="login-button"]');
});

Then('I should be logged in successfully', async function () {
  await page.waitForSelector('.title', { timeout: 10000 });
  const titleText = await page.textContent('.title');
  assert.strictEqual(titleText, 'Products');
  await browser.close();
});
