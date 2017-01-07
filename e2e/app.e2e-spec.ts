import { XhpHRPage } from './app.po';

describe('xhp-hr App', function() {
  let page: XhpHRPage;

  beforeEach(() => {
    page = new XhpHRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
