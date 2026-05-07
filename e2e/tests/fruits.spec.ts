import { test, expect } from '@playwright/test';

test.describe('Fruits Page', () => {
    test('displays fruits from the API', async ({ page }) => {
        await page.goto('/fruits.html');

        await expect(page.getByText('Apple')).toBeVisible();
        await expect(page.getByText('Banana')).toBeVisible();
    });

    test('mocks the fruit API', async ({ page }) => {
        // Intercept the API call
        await page.route('**/api/v1/fruits', async (route) => {
            const json = [{ name: 'Strawberry', id: 21 }];
            await route.fulfill({ json });
        });

        await page.goto('/fruits.html');

        // UI should render mocked data
        await expect(page.getByText('Strawberry')).toBeVisible();
        // Original fruits should NOT be present
        await expect(page.getByText('Apple')).not.toBeVisible();
    });
});
