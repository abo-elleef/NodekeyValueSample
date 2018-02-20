var map = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
};

function invalidKey(key) {
    console.log(key + ' is not a valid key');
    console.log('available keys are [' + Object.keys(map).join(', ') + ']')
}

var commands = {
    list: function () {
        console.log('store content :');
        for (i in map) {
            console.log('{' + i + ' : ' + map[i] + '}')
        }
    },
    get: function (key) {
        if (map[key]) {
            console.log(map[key])
        } else {
            invalidKey(key)
        }
    },
    add: function (key, value) {
        map[key] = value;
        commands.list()
    },
    remove: function (key) {
        if (map[key]) {
            delete(map[key]);
            console.log(key + ' has been removed')
        } else {
            invalidKey(key)
        }
        commands.list()
    },
    clear: function () {
        map = {};
        console.log('Store is clean')
    }
};
if (commands[process.argv[2]]) {
    commands[process.argv[2]](process.argv[3], process.argv[4]);
} else {
    console.log(process.argv[2] + ' is not supported');
    console.log('- use one of the following commands');
    console.log(' => node store list');
    console.log(' => node store add *key* *value*');
    console.log(' => node store get *key*');
    console.log(' => node store remove *key*');
    console.log(' => node store clear');
}
