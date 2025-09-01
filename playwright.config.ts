import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30 * 1000,
  use: {
    headless: true,
    baseURL: 'http://localhost:3000', // matches Next.js dev server
  },
  webServer: {
    command: 'npm run build && npm run start',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
});