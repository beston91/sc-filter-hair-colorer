// @input Asset.Material material
// @input Component.Label label

// Arrays are indexed from 0.
// Disable everything but the first (0th) item .
// for (var i = 1; i < script.items.length; i++) {
//   script.items[i].enabled = false;
// }

// // We remember what item is currently visible.
// // When we start it's the 0th item.
// var currentItemIndex = 0;

// // Define what happens when you tap.
// function activateNextItem() {
//   // Disable the current item.
//   script.items[currentItemIndex].enabled = false;

//   // Increment the current item index
//   currentItemIndex += 1;

//   // We need the current item index to wrap around
//   // once it's higher than the number of items we have.
//   currentItemIndex = currentItemIndex % script.items.length;

//   // Enable the new item.
//   script.items[currentItemIndex].enabled = true;
// }

// // Bind the function to the touch event.
// var touchEvent = script.createEvent("TapEvent");
// touchEvent.bind(activateNextItem);

var pass = script.material.getPass(0);
var i = 0;
function changeColor() {
  print("here");
  print(script.material.getPassCount());
  pass.baseColor = new vec4(Math.random(), Math.random(), Math.random(), 1.0);
  pass.blendMode = i;
  i++;
  if (i >= 7) i = 0;
  script.label.text = "render" + i;
}
var touchEvent1 = script.createEvent("TapEvent");
touchEvent1.bind(changeColor);
