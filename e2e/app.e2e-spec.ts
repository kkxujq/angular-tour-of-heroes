import { MyHeroesPage } from './app.po';

describe('my-heroes App', () => {
  let page: MyHeroesPage;

  beforeEach(() => {
    page = new MyHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
