import { Builder, Capabilities, By } from "selenium-webdriver";

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get("http://127.0.0.1:5500/public/index.html");
});

afterAll(async () => {
  driver.quit();
});

test("Title shows up when page loads", async () => {
  const title = await driver.findElement(By.tagName("h1"));
  const displayed = await title.isDisplayed();
  expect(displayed).toBe(true);
});

test("Clicking the Draw button displays the div with id='choices'", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  await drawButton.click();

  await driver.sleep(5000);

  const choicesDiv = await driver.findElement(By.id("choices"));
  const displayed = await choicesDiv.isDisplayed();
  expect(displayed).toBe(true);
});

test("Clicking an 'Add to Duo' button displays the div with id='player-duo'", async () => {
  const drawButton = await driver.findElement(By.id("draw"));
  await drawButton.click();

  await driver.sleep(2000);

  const addToDuoButton = await driver.findElement(By.css("#choices .bot-btn"));

  await addToDuoButton.click();

  const playerDuoDiv = await driver.findElement(By.id("player-duo"));
  const displayed = await playerDuoDiv.isDisplayed();
  expect(displayed).toBe(true);
});
