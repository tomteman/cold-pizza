import { ColdPizzaPage } from './app.po';

describe('cold-pizza App', function() {
  let page: ColdPizzaPage;

  beforeEach(() => {
    page = new ColdPizzaPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cold-pizza works!');
  });
});
