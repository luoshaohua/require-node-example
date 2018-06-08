function say(name, now) {
    if (name) {
        return '[SYNC]Hello ' + name + ',now browser time is:' + now + ',server time is:' + new Date();
    }
    else {
        throw '[SYNC ERROR]No name'
    }
}

function say_callback(name, now, callback) {
    setTimeout(function () {
        if (name) {
            callback(null, '[CALLBACK]Hello ' + name + ',now browser time is:' + now + ',server time is:' + new Date())
        }
        else {
            callback('[CALLBACK ERROR]No name')
        }
    }, 1000)
}

function say_promise(name, now) {
    return new Promise(function (resolve, reject) {
        if (name) {
            resolve('[PROMISE]Hello ' + name + ',now browser time is:' + now + ',server time is:' + new Date());
        }
        else {
            reject('[PROMISE ERROR]No name');
        }
    })
}

exports.say = say;
exports.say_callback = say_callback;
exports.say_promise = say_promise;