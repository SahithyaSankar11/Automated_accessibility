// accessibility.spec.ts
// This file: opens a page with Playwright, scans it with axe-core, and reports violations.
// Every test below follows the exact same 3-step pattern:
//   1. page.goto() — open the page (this part you already know from Playwright)
//   2. AxeBuilder(...).analyze() — run the accessibility scan
//   3. expect(...) — decide whether the test passes or fails based on what axe found

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// ============================================================
// TEST 1: Basic scan just see what violations exist, don't fail the test yet
// Good starting point: run this first and just LOOK at what axe finds.
// ============================================================
test('homepage accessibility scan (report only)', async ({ page }) => {
  await page.goto('https://www.canva.in/'); // Wikipedia homepage — stable, simple, good for testing setup

  const results = await new AxeBuilder({ page }).analyze();

  // Print violations to the console so you can read them
  console.log(`Found ${results.violations.length} accessibility violations`);
  results.violations.forEach((violation) => {
    console.log(`\n[${violation.impact?.toUpperCase()}] ${violation.id}`);
    console.log(`Description: ${violation.description}`);
    console.log(`Affected elements: ${violation.nodes.length}`);
  });

  // No hard assertion here yet — this test is just for exploring what's on the page.
});

// ============================================================
// TEST 2: Fail the test if there are any CRITICAL or SERIOUS violations
// This is the version you'd actually use in a real CI pipeline —
// it turns accessibility bugs into real test failures, same as any other bug.
// ============================================================
test('homepage has no critical or serious accessibility violations', async ({ page }) => {
  await page.goto('https://www.canva.in/');

  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa']) // scan against WCAG 2.0 Level A and AA rules
    .analyze();

  const criticalOrSerious = results.violations.filter(
    (v) => v.impact === 'critical' || v.impact === 'serious'
  );

  // This is where the test actually passes or fails.
  // If this array isn't empty, the test fails and shows you what broke.
  expect(criticalOrSerious).toEqual([]);
});

// ============================================================
// TEST 3: Scan multiple pages in one run (loop pattern)
// Same idea as testing multiple modules — reuse the same check across several URLs.
// ============================================================
const pagesToScan = [
  'https://www.canva.in/',
  // Add more EPFO public pages here as you explore the site,
  // e.g. the "For Employees" page, "Downloads" page, grievance portal —
  // stick to public pages only, don't attempt to log in.
];

for (const url of pagesToScan) {
  test(`accessibility scan: ${url}`, async ({ page }) => {
    await page.goto(url);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();

    console.log(`${url} — ${results.violations.length} violations found`);

    const critical = results.violations.filter((v) => v.impact === 'critical');
    expect(critical).toEqual([]);
  });
}