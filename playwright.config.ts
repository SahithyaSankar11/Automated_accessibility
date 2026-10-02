import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: 'html', // generates a visual HTML report you can open in a browser after the run
  use: {
    headless: false, // set to true once you're comfortable — false lets you SEE the browser open
  },
});