import { MiniSidenavPage } from './app.po';

describe('mini-sidenav App', () => {
  let page: MiniSidenavPage;

  beforeEach(() => {
    page = new MiniSidenavPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
