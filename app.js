const user = {
    name: 'Bob',
    age: 34,
    id: 1,
    address: {
        city: 'Odessa',
        country: 'Ukraine'
    },

    books: [{
        name: 'red one',
        id: 35,
        author: {
            name: 'Some Author',
            id: 277
        },
        tags: ['history', 'roman']
    }]
}

function recursiveFunc(obj, result = {}) {
    for (let key in obj) {
        if (typeof obj[key] !== 'object') {
            result[key] = obj[key];
        } else {
            if (Array.isArray(obj[key])) {
                result[key] = obj[key];
            } else if (typeof obj[key] === 'object') {
                result[key] = obj[key];
            } else {
                recursiveFunc(obj[key], result);
            }
        }
    }
    return result;
}

const foo = recursiveFunc(user);
console.log(user);
console.log(foo);