import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display genre name', () => {
    page.navigateTo();
    expect(page.getGenreTitleText()).toEqual('Popular in Drama');
  });

  it('should display genre more text', () => {
    page.navigateTo();
    expect(page.getMoreButton().getText()).toEqual('MORE');
  });

  it('should display genre dashborad totle', () => {
    page.navigateTo();
    page.getMoreButton().click();
    expect(page.getMoreGenreTitle()).toEqual('Popular in Drama');
  });

  it('should display show tile in details page', () => {
    page.navigateTo();
    expect(page.getShowTileBlock().isPresent()).toBeTruthy();
    page.getShowTileBlock().click();
    expect(page.getShowDetailsTile()).toEqual('Under the Dome');
  });

  it('should handle back button click in details page', () => {
    page.navigateTo();
    page.getShowTileBlock().click();
    page.getShowDetailBackButton().click();
    expect(page.getGenreTitleText()).toEqual('Popular in Drama');
    expect(page.getMoreButton().getText()).toEqual('MORE');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
