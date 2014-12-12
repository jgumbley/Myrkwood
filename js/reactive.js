var wireUpSliderToLabel;

wireUpSliderToLabel = function($slider, $label) {
  var sliderValue;
  sliderEventStream = $slider.asEventStream('input').map(function(event) {
    return event.target.value;
  });
  sliderEventStream.assign($label, "text");
};
