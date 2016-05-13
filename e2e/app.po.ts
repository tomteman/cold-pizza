export class ColdPizzaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cold-pizza-app h1')).getText();
  }
}
