import { AngappPage } from './app.po';

describe('angapp App', () => {
  let page: AngappPage;

  beforeEach(() => {
    page = new AngappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
