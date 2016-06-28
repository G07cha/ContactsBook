describe('contacts', function() {
  it('should open a contacts', function() {
    var contactsSidebar = '#sidebar-wrapper > ul > li > a[href="#contacts"]';
    var contactsHeader = 'div.container.ng-scope > div.page-header.ng-scope > h2';

    browser.get('http://localhost:3000');

    element(by.css(contactsSidebar)).click();
    expect(element(by.css(contactsHeader)).getText()).toBe('Contact List');
  });

  it('should show table with a values from the server', function() {
    var tableRows = 'div.container.ng-scope > table > tbody > tr';

    expect(element.all(by.css(tableRows)).count()).toBe(3);
  });

  it('should have a single page', function() {
    var pagesAndButtons = 'dir-pagination-controls > ul > li'

    // 3 because previous and next also counts
    expect(element.all(by.css(pagesAndButtons)).count()).toBe(3);
  });

  it('should search by name', function() {
    var searchInput = '#contacts-search';
    var tableRow = 'div.container.ng-scope > table > tbody > tr';

    element(by.css(searchInput)).sendKeys('Konstantin');
    expect(element.all(by.css(tableRow)).count()).toBe(2);
  });
});
