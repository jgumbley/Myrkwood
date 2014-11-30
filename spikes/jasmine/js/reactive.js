var wireUpSliderToLabel;

wireUpSliderToLabel = function($slider, $label) {
  var sliderValue;
  sliderValue = $slider.asEventStream('input').map(function(event) {
    return event.target.value;
  });
  return sliderValue.assign($label, "text");
};
