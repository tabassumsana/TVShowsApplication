import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getGenreTitleText(): Promise<string> {
    return element.all(by.css('.container .genre-name span')).first().getText() as Promise<string>;
  }
  getMoreButton(): ElementFinder {
    return element.all(by.css('.more-shows')).first();
  }
  getMoreGenreTitle(): Promise<string>{
    return element.all(by.css('.genre-name')).first().getText() as Promise<string>;
  }

  getShowTileBlock(): ElementFinder {
    return element.all(by.css('.show-list .show-list-div')).first();
  }

  getShowDetailsTile(): Promise<string> {
    return element(by.css('.detail-container-div .detail-container .show-name')).getText() as Promise<string>;
  }

  getShowDetailBackButton(): ElementFinder {
    return element(by.css('.detail-container-div .back-icon'));
  }
}
