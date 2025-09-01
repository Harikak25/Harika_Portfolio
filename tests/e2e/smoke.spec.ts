import { test, expect } from '@playwright/test';

test('portfolio homepage loads', async ({ page }) => {
  // In CI, Next.js build runs first and then Playwright serves the app.
  // For local dev, make sure `npm run dev` or `npm run build && npm run start` is running.
  await page.goto('/');

  // Just check that the page has a <body> element
  await expect(page.locator('body')).toBeVisible();
});