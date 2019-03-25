// @input Asset.Material material
// @input Component.Label label
// @input Component.Label blendModeLabel
var blendModes = [
  "Normal",
  "Screen",
  "PreMultAlpha",
  "AlphaToCoverage",
  "Add",
  "AlphaTest",
  "ColouredGlass",
  "Multiply"
];
var pass = script.material.getPass(0);
function changeColor() {
  pass.baseColor = new vec4(Math.random(), Math.random(), Math.random(), 1.0);
}
var touchEvent1 = script.createEvent("TapEvent");
touchEvent1.bind(changeColor);

global.changeRendering = function(index) {
  pass.blendMode = index;
  script.label.text = "Render " + (index + 1) + "/8";
  script.blendModeLabel.text = "Render Mode: " + blendModes[index];
  print(index);
};
script.label.text = "Render 1/8";
 script.blendModeLabel.text = "Render Mode: " + blendModes[0];
