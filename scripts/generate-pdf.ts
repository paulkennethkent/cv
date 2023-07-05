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
    path: "public/cv.pdf",
    margin: {
      top: "30px",
      bottom: "20px",
    },
    printBackground: false,
  });

  await browser.close();
})();
