import scene from "./basic/Scene.js";
import camera from "./basic/Camera.js";
import renderer from "./basic/Renderer.js";
import silla from "./basic/shapes/Silla.js";
import mesa from "./basic/shapes/Mesa.js";
import light from "./basic/Light.js";
import resize from "./basic/Resize.js";
import plane from "./basic/shapes/Suelo.js";
import loopMachine from "./basic/LooMachine.js";
import keyListener from "./basic/KeyListener.js";
import KeyCodes from "./basic/Keycode.js";
import sphere from "./basic/shapes/Personaje.js";


scene.add(silla);
scene.add(mesa);
scene.add(sphere);
scene.add(plane);
scene.add(light);



const actions = {
    Enter: () => sphere.position.set(0, 1, -1),
    Shift: () => sphere.position.set(0, 0.5, -0.5),
    S: () => sphere.position.x += 0.02,
    W: () => sphere.position.x += -0.02,
    A: () => sphere.position.z += 0.02,
    D: () => sphere.position.z += -0.02
};

loopMachine.addUniqueCallback(() => {

    camera.position.x = sphere.position.x + 2;
    camera.position.y = sphere.position.y + 2;
    camera.position.z = sphere.position.z + 2;

    camera.lookAt(sphere.position);


    Object.keys(actions).forEach(key => {
        if (keyListener.isPressed(KeyCodes.getCode(key))) {
            actions[key]();
        }
    });
    renderer.render(scene, camera);
});

loopMachine.startInterval(60);
resize.toggle(renderer);
keyListener.start();









