/**
 * App tests
 */
describe('App', function () {

  it('is an object', function () {
    expect(typeof App).toBe('object');
  });

  it('has an init function', function () {
    expect(App.init).toBeDefined();
    expect(typeof App.init).toBe('function');
  });

  /**
   * App.init() tests
   */
  describe('App.init', function () {
    var element;

    beforeEach(function () {
      element = document.createElement('h1');
    });

    it('sets the innnerHTML of an element to the passed message', function () {
      App.init(element, 'foo');
      expect(element.innerHTML).toBe('foo');
    });
  });

});