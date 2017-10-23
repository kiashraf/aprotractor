import { ViewChild } from '@angular/core';
import { AppPage } from './app.po';

describe('aprotractor App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateToLogin();
    expect(page.getParagraphText()).toEqual('Welcome to Protractor Demo!');
  });

  it('should display two tabs for Login & Register', () => {
    const tabs = page.getPageTabs();
    expect(tabs.count()).toEqual(2);
    tabs.each(function (element, index) {
      element.getText().then(function(text){
        console.log(index, text);
      });
    });
    console.log('RAM - END');
  });

  it('should go to register tab',() =>{
    page.navigateToProfileList();
    expect(page.getParagraphTextProfile()).toEqual('Profiles');
  })

});
