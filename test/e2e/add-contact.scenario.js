describe('contacts', function() {
  it('should open an empty contact form', function() {
    var contactsSidebar = '#sidebar-wrapper > ul > li > a[href="#contacts"]';
    var addContactBtn = '#add-contact';
    var contactsHeader = 'div.container.ng-scope > div.page-header.ng-scope > h2';

    browser.get('http://localhost:3000');

    element(by.css(contactsSidebar)).click();
    element(by.css(addContactBtn)).click();

    expect(element(by.css(contactsHeader)).getText()).toBe('Contact Form');
  });

  var phoneInput = '#edit-form > typed-list:nth-child(4) > div.row.ng-scope > div.col-md-9.col-sm-7.col-xs-6 > input';
  var phoneSelect = '#edit-form > typed-list:nth-child(4) > div.row.ng-scope > div.col-md-2.col-sm-3.col-xs-4 > select';

  it('should change phone\'s prefix', function() {
    // Checking default value
    expect(element(by.css(phoneInput)).getAttribute('value')).toBe('+91');

    // Changing type
    element(by.css(phoneSelect)).click();
    element(by.css(phoneSelect + ' > option:nth-child(2)')).click();

    // Checking new value
    expect(element(by.css(phoneInput)).getAttribute('value')).toBe('+020');
  });

  it('should change phone\'s prefix and keep old value', function() {
    element(by.css(phoneInput)).sendKeys('12345');
    // Changing type
    element(by.css(phoneSelect)).click();
    element(by.css(phoneSelect + ' > option:nth-child(1)')).click();

    // Checking new value
    expect(element(by.css(phoneInput)).getAttribute('value')).toBe('+9112345');
  });

  it('should add phone\'s prefix and keep old value', function() {
    element(by.css(phoneInput)).clear();
    element(by.css(phoneInput)).sendKeys('12345');
    // Changing type
    element(by.css(phoneSelect)).click();
    element(by.css(phoneSelect + ' > option:nth-child(2)')).click();

    // Checking new value
    expect(element(by.css(phoneInput)).getAttribute('value')).toBe('+02012345');
  });
});
