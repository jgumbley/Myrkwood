var wireUpSliderToLabel;

wireUpSliderToLabel = function($slider, $label) {
  var sliderValue;
  sliderValue = $slider.asEventStream('input');
  return sliderValue.assign($label, "text");
};
