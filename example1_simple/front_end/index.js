var test = require('../back_end/api/test.js');

window.onload = async function () {
    var sum = await test.add(1, 2)
    alert('sum = ' + sum);
}