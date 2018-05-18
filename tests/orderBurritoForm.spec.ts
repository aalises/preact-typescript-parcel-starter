import * as puppeteer from 'puppeteer';

let page;
let browser;

beforeAll(async () => {
  browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  page = await browser.newPage();
});

afterAll(() => {
  browser.close();
});

describe("Default test suite", () => {

  test("Shows correct non validation message when no type/size", async () => {

  });

  test("Shows correct placed order message", async () => {

  });
})
