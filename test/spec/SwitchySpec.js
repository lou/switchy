describe("Switchy", function() {

  describe('init', function(){

    it ('should be chainable', function(){
      originalSelect.switchy().addClass('chainable');
      expect(originalSelect.hasClass('chainable')).toBeTruthy();
    });

    describe('without options', function(){

      beforeEach(function() {
        originalSelect.switchy();
        switchyContainer = originalSelect.next();
        switchyBar = switchyContainer.children();
        switchySlider = switchyBar.children();
      });

      it('should hide the original select', function(){
        expect(originalSelect.css('position')).toBe('absolute');
        expect(originalSelect.css('left')).toBe('-9999px');
      });

      it('should create a container', function(){
        expect(switchyContainer).toBe('div.switchy-container');
      });

      it ('should create a bar', function(){
        expect(switchyContainer).toContain('div.switchy-bar');
      });

      it ('should create a slider', function(){
        expect(switchyContainer).toContain('div.switchy-slider');
      });

    });

    describe('without a selected option', function(){
      it ('should init the slider position to CSS value', function(){
        expect(switchySlider.position().left).toBe(0);
      });
    });

    describe('with a selected option', function(){
      it ('should init the slider position to the right one', function(){
        originalSelect.children('option').eq(1).prop('selected', true);
        originalSelect.switchy();
        switchyContainer = originalSelect.next();
        switchyBar = switchyContainer.children();
        switchySlider = switchyBar.children();

        var sliderPosition = (switchyBar.innerWidth() / (originalSelect.children('option').length - 1)) - (switchySlider.outerWidth(true) / 2);
        expect(switchySlider.position().left).toBe(sliderPosition);
      });
    });

  });
});