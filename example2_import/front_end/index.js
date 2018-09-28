console.log = console.error = function () {
    var log = console.log;
    return function () {
        var args = Array.prototype.slice.call(arguments);
        log(args.join(' '));
        document.body.innerHTML += args.join(' ') + '<br/>'
    }
}()

var test = require('../back_end/api/test.js');

window.onload = async function () {
    //test back end function: say
    try {
        var result = await test.say('world', new Date())
        console.log(result)
    } catch (err) {
        console.error(err)
    }
    test.say('world', new Date(), function (err, result) {
        console.log(err, result)
    })
    test.say('world', new Date()).then(function (result) {
        console.log(result)
    }, function (err) {
        console.error(err)
    })


    //test back end function: say_callback
    try {
        var result = await test.say_callback('world', new Date())
        console.log(result)
    } catch (err) {
        console.error(err)
    }
    test.say_callback('world', new Date(), function (err, result) {
        console.log(err, result)
    })
    test.say_callback('world', new Date()).then(function (result) {
        console.log(result)
    }, function (err) {
        console.error(err)
    })


    //test back end function: say_promise
    try {
        var result = await test.say_promise('world', new Date())
        console.log(result)
    } catch (err) {
        console.error(err)
    }
    test.say_promise('world', new Date(), function (err, result) {
        console.log(err, result)
    })
    test.say_promise('world', new Date()).then(function (result) {
        console.log(result)
    }, function (err) {
        console.error(err)
    })
}