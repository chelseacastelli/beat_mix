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
    if ((x < 0 || x >= size) || (y < 0 || y >= size)) return [] 

    let pairs = [];

    const coords = {
        "left": [x-1, y],
        "right": [x+1, y],
        "top": [x, y+1],
        "below": [x, y-1]
    }

    if (x === 0){
        if (y === 0) pairs.push(coords["top"], coords["right"]);
        else if (y < size-1) pairs.push(coords["top"], coords["right"], coords["below"]);
        else pairs.push(coords["right"], coords["below"]);
    } else if (x === size-1) {
        if (y === 0) pairs.push(coords["top"], coords["left"]);
        else if (y < size-1) pairs.push(coords["top"], coords["left"], coords["below"]);
        else pairs.push(coords["left"], coords["below"]);
    } else if (y === 0) {
        if (x === 0) pairs.push(coords["top"], coords["right"]);
        else if (x < size-1) pairs.push(coords["left"], coords["top"], coords["right"]);
        else pairs.push(coords["left"], coords["top"]);
    } else if (y === size-1) {
        if (x === 0) pairs.push(coords["below"], coords["right"]);
        else if (x < size-1) pairs.push(coords["left"], coords["below"], coords["right"]);
        else pairs.push(coords["left"], coords["below"]);
    } else {
        pairs.push(coords["left"], coords["below"], coords["right"], coords["top"]);
    }

    return pairs;
}

