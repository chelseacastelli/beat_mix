// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, index, newPresetArray=null) => {
    let returnArr = [];
    // if index invalid -- 404 Not Found, otherwise, 200 OK
    if (index < 0 || index >= presets.length) returnArr.push(404)
    else returnArr.push(200)

    if (request === 'GET') returnArr.push(presets[index])

    else if (request === 'PUT') {
        presets[index] = newPresetArray;
        returnArr.push(presets[index]);
    } 

    // if request invalid -- 400 Bad Request as first element
    else returnArr.unshift(400)

    
    return returnArr;

};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
