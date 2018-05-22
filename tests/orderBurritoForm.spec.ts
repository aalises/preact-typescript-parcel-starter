import puppeteer from 'puppeteer';

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
    await page.goto('https://aalises.github.io/preact-typescript-parcel-starter/')
    await page.select("select[data-bind='type']", "Vegan");
    await page.click("#order-button");
    const message = await page.evaluate(_ => document.querySelector("#order-message").innerHTML);
    expect(message).toEqual('Please select the type and size of your burrito');
  });

  test("Shows correct order placed message", async () => {
    await page.select("select[data-bind='type']", "Chicken");
    await page.select("select[data-bind='size']", "Medium");
    await page.click("#order-button");
    let message = await page.evaluate(_ => document.querySelector("#order-message").innerHTML);
    expect(message).toEqual('Your petition of a Medium Chicken burrito has been succesful!');
    await page.click("input[data-bind='toTakeAway']");
    await page.select("select[data-bind='type']", "Cheese");
    await page.click("#order-button");
    message = await page.evaluate(_ => document.querySelector("#order-message").innerHTML);
    expect(message).toEqual('Your petition of a Medium Cheese burrito to take away has been succesful!');
  });

  test("Correctly delete orders", async () => {
    await page.click("#delete-order-button");
    await page.click("#delete-order-button");
    const message = await page.evaluate(_ => document.querySelector("#no-order-message").innerHTML);
    expect(message).toEqual("There are no orders yet, come on, aren't you hungry?");
  });
})
