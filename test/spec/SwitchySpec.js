describe("Switchy", function() {

  var select;

  beforeEach(function() {
    $('<select id="select"></select>').appendTo('body');
    for (var i=1; i <= 3; i++) {
      $('<option value="value'+i+'">text'+i+'</option>').appendTo($("#multi-select"));
    };
    select = $("#select");
  });

  describe('init', function(){
    it ('should be chainable', function(){
      select.switchy().addClass('chainable');
      expect(select.hasClass('chainable')).toBeTruthy();
    });
  });

});