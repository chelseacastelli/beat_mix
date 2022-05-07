// Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

let drumKit = {
    'kicks': kicks,
    'snares': snares,
    'hiHats': hiHats,
    'rideCymbals': rideCymbals
}

const toggleDrum = (drumPad, index) => {
    // check for missing arguments or invalid array name
    if ((drumPad === undefined || index === undefined) || (!drumKit[drumPad])) return;

    if (index >= drumKit[drumPad].length || index < 0) return;

    drumKit[drumPad][index] = !drumKit[drumPad][index];
}

const clear = drumPad => {
    if ((drumPad === undefined) || (!drumKit[drumPad])) return;

    for (let i = 0; i < drumKit[drumPad].length; i++) { drumKit[drumPad][i] = false; }
}

const invert = drumPad => {
    if ((drumPad === undefined) || (!drumKit[drumPad])) return;

    for (let i = 0; i < eval(drumPad).length; i++) { eval(drumPad)[i] = !eval(drumPad)[i]; }
}


const getNeighborPads = (x, y, size) => {
    const neighborPads = [];

    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
      return neighborPads;
    }

    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);

    return neighborPads.filter((neighbor) => {

      return neighbor.every((val) => {
        return val >= 0 && val < size;
      });
      
    });
  };

