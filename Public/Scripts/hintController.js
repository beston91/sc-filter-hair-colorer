// -----JS CODE-----
// @input Component.Label hintLabel

var delayedEvent = script.createEvent("DelayedCallbackEvent");
delayedEvent.bind(function(eventData) {
    script.hintLabel.destroy();
});

// Start with a 2 second delay
delayedEvent.reset(3);
