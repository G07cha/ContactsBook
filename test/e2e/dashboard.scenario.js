describe('dashboard componenets', function() {
  it('should display logo and sidebar on start', function() {
    var header = 'main-layout > header > h4';
    var sidebarItem = '#sidebar-wrapper > ul > li';

    browser.get('http://localhost:3000');

    expect(element(by.css(header)).isPresent()).toBe(true);
    expect(element.all(by.css(sidebarItem)).count()).toBe(2);
  });
});
