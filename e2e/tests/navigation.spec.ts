import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
    test('mobile: login is reachable through burger menu', async ({ page }) => {
        const viewportWidth = page.viewportSize()?.width ?? 0;
        test.skip(viewportWidth >= 768, 'This test is only for mobile viewports (<768px)');

        await page.goto('/');

        // Nav links should be hidden on mobile
        await expect(page.getByRole('menubar')).not.toBeVisible();

        // Open burger menu
        await page.getByRole('button', { name: 'Open menu' }).click();

        // Nav links should now be visible
        await expect(page.getByRole('menubar')).toBeVisible();

        // Click Login link
        await page.getByRole('menuitem', { name: 'Login' }).click();

        await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
    });

    test('desktop/tablet: login is visible without burger menu', async ({ page }) => {
        const viewportWidth = page.viewportSize()?.width ?? 0;
        test.skip(viewportWidth < 768, 'This test is only for tablet/desktop viewports (>=768px)');

        await page.goto('/');

        // Burger should not be visible
        await expect(page.getByRole('button', { name: 'Open menu' })).not.toBeVisible();

        // Nav links should be visible directly
        await expect(page.getByRole('menuitem', { name: 'Login' })).toBeVisible();

        await page.getByRole('menuitem', { name: 'Login' }).click();

        await expect(page.getByRole('heading', { name: 'Sign In' })).toBeVisible();
    });
});
