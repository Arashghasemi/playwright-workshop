import { test, expect } from '@playwright/test';

test.describe('Hydration - toPass()', () => {
    test('submit order with poorly hydrated button using toPass', async ({ page }) => {
        await page.goto('/dashboard.html');

        // The button is visible immediately but the click handler
        // is attached after a 1-3s delay (simulated poor hydration).
        // Using toPass() to retry the entire click + assertion block.
        await expect(async () => {
            await page.getByRole('button', { name: 'Submit' }).click();
            await expect(page.getByText('Order confirmed')).toBeVisible();
        }).toPass({
            intervals: [100, 250, 500, 1000],
            timeout: 10_000,
        });
    });
});
