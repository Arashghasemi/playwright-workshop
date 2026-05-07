import { test, expect } from '@playwright/test';

test.describe('Login', () => {
    test('successful login navigates to dashboard', async ({ page }) => {
        await page.goto('/login.html');

        await page.getByLabel('Username').fill('admin');
        await page.getByLabel('Password').fill('password');
        await page.getByRole('button', { name: 'Sign in' }).click();

        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    });

    test('invalid login shows error', async ({ page }) => {
        await page.goto('/login.html');

        await page.getByLabel('Username').fill('wrong');
        await page.getByLabel('Password').fill('wrong');
        await page.getByRole('button', { name: 'Sign in' }).click();

        await expect(page.getByText('Invalid credentials')).toBeVisible();
    });
});
