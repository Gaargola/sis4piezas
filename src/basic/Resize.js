import camera from "./Camera.js";

class Resize {
    toggle(renderer) {
        if (this.resizeHandler) {
            window.removeEventListener("resize", this.resizeHandler);
            this.resizeHandler = null;
        } else {
            this.resizeHandler = () => this.resize(renderer);
            window.addEventListener("resize", this.resizeHandler);
        }
    }
    resize(renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

const resize = new Resize();

export default resize;