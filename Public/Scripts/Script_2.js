// @input SceneObject object
// @input Asset.Texture texture
// @input Component.FaceMaskVisual faceMask

// var whilte = new vec4(1.0, 1.0, 1.0, 1.0);
// script.texture.baseTex = new vec4(1.0, 1.0, 1.0, 1.0);
// script.object.getMaterial(0);
var material = script.faceMask.getMaterial(0);
print(material.getPassCount());
var pass = material.getPass(0);
// pass.colorMask = new vec4b(true, false, false, false);
// pass.baseColor = new vec4(0.0,1.0,1.0,1.0);
pass.lighting = true;
pass.specular = true;
pass.diffuse = true;
// pass.baseTex =  null;
pass.baseTex = script.texture;

// // Our starting texture index
// var currentItemIndex = 1;

// // Assign the initial texture to our sprite
// script.object = script.textures[currentItemIndex];

// // Define what happens when you tap.
// function changeTexture() {
//     // Increment the current item index
//     currentItemIndex += 1;
//     // We need the current item index to wrap around
//     // once it's higher than the number of items we have.
//     currentItemIndex = currentItemIndex % script.textures.length;
//     // Change the sprite's texture
//     script.sprite.mainPass.baseTex = script.textures[currentItemIndex];
// }

// // Bind the function to the touch event.
// var touchEvent = script.createEvent("TapEvent");
// touchEvent.bind(changeTexture);
