import { RockParade2Page } from './app.po';

describe('rock-parade2 App', function() {
  let page: RockParade2Page;

  beforeEach(() => {
    page = new RockParade2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
