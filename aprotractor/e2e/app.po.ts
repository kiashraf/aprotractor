import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToLogin() {
    return browser.get('/login');
  }

  navigateToProfileList(){
    return browser.get('/list');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getPageTabs(){
    return element.all(by.tagName('li'));
  }
}
