import { test, expect } from '@playwright/test';

test.describe('Non-Deterministic Flows', () => {
    test('handles cookie banner or proceeds without it', async ({ page }) => {
        await page.goto('/');

        const cookieBanner = page.getByRole('button', { name: 'Accept Cookies' });
        const heroHeading = page.getByRole('heading', { name: 'Welcome to the Demo App' });

        // Wait for EITHER the cookie banner OR the hero content
        await expect(cookieBanner.or(heroHeading).first()).toBeVisible();

        // Dismiss cookie banner if it appeared
        if (await cookieBanner.isVisible()) {
            await cookieBanner.click();
            await expect(cookieBanner).not.toBeVisible();
        }

        await expect(heroHeading).toBeVisible();
    });
});
