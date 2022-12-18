
class KeyListener {
  constructor() {
    this.keys = new Set();
  }
  down = (e) => {
    this.keys.add(e.keyCode);
    //this.caster([KeyCodes.getKey(e.keyCode), true, this.keys]);
  }
  up = (e) => {
    this.keys.delete(e.keyCode);
    //this.caster([KeyCodes.getKey(e.keyCode), false, this.keys]);
  }
  isPressed(keyCodes) {
    return this.keys.has(keyCodes);
  }
  start() {
    this.stop();
    window.addEventListener('keydown', this.down);
    window.addEventListener("keyup", this.up);
  }
  stop() {
    window.removeEventListener('keydown', this.down);
    window.removeEventListener("keyup", this.up);
  }
}


const keyListener = new KeyListener;

export default keyListener;

export { KeyListener }