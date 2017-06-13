import { CantinaPage } from './app.po';

describe('cantina App', () => {
  let page: CantinaPage;

  beforeEach(() => {
    page = new CantinaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
