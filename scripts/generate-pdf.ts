// @ts-nocheck
import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://127.0.0.1:3000/", { waitUntil: "networkidle" });

  const downloadButton = page.locator("#download");
  const toggle = page.locator("#toggleIt");
  await downloadButton.evaluate((node) => (node.innerHTML = ""));
  await toggle.evaluate((node) => (node.innerHTML = ""));

  await page.pdf({
    path: "public/resume.pdf",
    margin: {
      top: "20px",
      bottom: "80px",
    },
    printBackground: true,
  });

  await browser.close();
})();
