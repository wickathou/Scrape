import puppeteer from "puppeteer";
import { ScrapeResultType } from "./types";

export const runScrape = async (url: string):Promise<ScrapeResultType> => {
  console.log("THIS IS RUNNING");
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch(
    {headless:true}
  );
  const page = await browser.newPage();
  console.log("Second");

  // Navigate the page to a URL
  await page.goto(url);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  console.log("Third");

  const pageHTML: string = await page.content();
  const pageScreenshot: string = await page.screenshot({encoding:'base64'});
  // Type into search box
  // await page.type('.devsite-search-field', 'automate beyond recorder');

  // // Wait and click on first result
  // const searchResultSelector = '.devsite-result-item-link';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);
  // console.log('Fourth')

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate',
  // );
  // const fullTitle = await textSelector?.evaluate(el => el.textContent);
  // console.log('Fifth')

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
  return { html: pageHTML, screenshot: pageScreenshot };
  // return fullTitle
};
