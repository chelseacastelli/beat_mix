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


