  var originalSelect;
  var switchyContainer;
  var switchyBar;
  var switchySlider;

  beforeEach(function() {
    $('<select id="original-select"></select>').appendTo('body');
    for (var i=1; i <= 3; i++) {
      $('<option value="value'+i+'">text'+i+'</option>').appendTo($("#original-select"));
    };
    originalSelect = $("#original-select");
  });

  afterEach(function () {
    $("#original-select, .switchy-container").remove();
  });
