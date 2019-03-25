// -----JS CODE-----
global.touchSystem.touchBlocking = true;
global.touchSystem.enableTouchBlockingException("TouchTypeTap", true);
global.touchSystem.enableTouchBlockingException("TouchTypeDoubleTap", true);

// Global variables
var prevXposition = 0;
global.prevXposition = prevXposition;
var index = 0;
global.curIndex = index;
var counter = 0;


// Going forward
function indexPlus() {
  if (global.curIndex < 7) {
    global.curIndex++;
        global.changeRendering(global.curIndex);
  }
}
// Going backward
function indexMinus() {
  if (global.curIndex > 0) {
    global.curIndex--;
        global.changeRendering(global.curIndex);
  }
}

// Swipe register
var event = script.createEvent("TouchStartEvent");
event.bind(function(eventData) {
  global.prevXposition = eventData.getTouchPosition().x;
  print(eventData.getTouchPosition().x);
});

var event = script.createEvent("TouchEndEvent");
event.bind(function(eventData) {
  if (eventData.getTouchPosition().x < global.prevXposition) {
    indexPlus();
    print("left");
  } else if (eventData.getTouchPosition().x > global.prevXposition) {
    indexMinus();
    print("right");
  }
});
