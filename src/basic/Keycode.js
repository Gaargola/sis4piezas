class KeyCodes {
  static codes = [
    { key: "Backspace", code: 8 },
    { key: "Tab", code: 9 },
    { key: "Enter", code: 13 },
    { key: "Shift", code: 16 },
    { key: "Ctrl", code: 17 },
    { key: "Alt", code: 18 },
    { key: "Pause/Break", code: 19 },
    { key: "Caps Lock", code: 20 },
    { key: "Escape", code: 27 },
    { key: "Space", code: 32 },
    { key: "Page Up", code: 33 },
    { key: "Page Down", code: 34 },
    { key: "End", code: 35 },
    { key: "Home", code: 36 },
    { key: "Left Arrow", code: 37 },
    { key: "Up Arrow", code: 38 },
    { key: "Right Arrow", code: 39 },
    { key: "Down Arrow", code: 40 },
    { key: "Insert", code: 45 },
    { key: "Delete", code: 46 },
    { key: "0", code: 48 },
    { key: "1", code: 49 },
    { key: "2", code: 50 },
    { key: "3", code: 51 },
    { key: "4", code: 52 },
    { key: "5", code: 53 },
    { key: "6", code: 54 },
    { key: "7", code: 55 },
    { key: "8", code: 56 },
    { key: "9", code: 57 },
    { key: "A", code: 65 },
    { key: "B", code: 66 },
    { key: "C", code: 67 },
    { key: "D", code: 68 },
    { key: "E", code: 69 },
    { key: "F", code: 70 },
    { key: "G", code: 71 },
    { key: "H", code: 72 },
    { key: "I", code: 73 },
    { key: "J", code: 74 },
    { key: "K", code: 75 },
    { key: "L", code: 76 },
    { key: "M", code: 77 },
    { key: "N", code: 78 },
    { key: "O", code: 79 },
    { key: "P", code: 80 },
    { key: "Q", code: 81 },
    { key: "R", code: 82 },
    { key: "S", code: 83 },
    { key: "T", code: 84 },
    { key: "U", code: 85 },
    { key: "V", code: 86 },
    { key: "W", code: 87 },
    { key: "X", code: 88 },
    { key: "Y", code: 89 },
    { key: "Z", code: 90 },
    { key: "Left Windows", code: 91 },
    { key: "Right Windows", code: 92 },
    { key: "Select", code: 93 },
    { key: "Num Lock", code: 144 },
    { key: "Scroll Lock", code: 145 },
    { key: ";", code: 186 },
    { key: "=", code: 187 },
    { key: ",", code: 188 },
    { key: "-", code: 189 },
    { key: ".", code: 190 },
    { key: "/", code: 191 },
    { key: "`", code: 192 },
    { key: "[", code: 219 },
    { key: "\\", code: 220 },
    { key: "]", code: 221 },
    { key: "'", code: 222 }
  ];
  static getKey(code) {
    return this.codes.find(c => c.code === code).key;
  }
  static getCode(key) {
    return this.codes.find(c => c.key === key).code;
  }
}

export default KeyCodes;