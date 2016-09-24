import { RockParadePage } from './app.po';

describe('rock-parade2 App', function() {
  let page: RockParadePage;

  beforeEach(() => {
    page = new RockParadePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
