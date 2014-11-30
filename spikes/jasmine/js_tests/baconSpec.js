describe('the reactive wiring', function() {
  it('updates a label whenever that slider changes', function () {
    $slider = $('<input type="range" min="0" max="100" value="50"/>');
    $label = $('<div/>');

    wireUpSliderToLabel( $slider, $label );

    $slider.val(22).trigger("input");

    expect($label.text()).to.equal("22");
  });
});

