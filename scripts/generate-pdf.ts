// @ts-nocheck
import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://paulcv-git-main-pkennethkent.vercel.app/", {
    waitUntil: "networkidle",
  });

  const downloadButton = page.locator("#download");
  const toggle = page.locator("#toggleIt");
  await downloadButton.evaluate((node) => (node.innerHTML = ""));
  await toggle.evaluate((node) => (node.innerHTML = ""));

  await page.pdf({
    path: "public/cv.pdf",
    margin: {
      top: "10px",
      bottom: "20px",
    },
    printBackground: false,
  });

  await browser.close();
})();
