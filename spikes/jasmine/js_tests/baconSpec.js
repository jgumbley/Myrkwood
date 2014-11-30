describe('our reactive wiring', function() {
  return it('updates this label whenever that slider changes', function() {
    var $label, $slider;
    $slider = $('<input type="range" min="0" max="100" value="50"/>');
    $label = $('<div/>');
    wireUpSliderToLabel($slider, $label);
    $slider.val(22).trigger("input");
    expect($label.text()).toEqual("22");
  });
});
