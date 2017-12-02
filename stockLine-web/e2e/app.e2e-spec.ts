import { StockLineWebPage } from './app.po';

describe('stock-line-web App', () => {
  let page: StockLineWebPage;

  beforeEach(() => {
    page = new StockLineWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
