const filterOutOdds = (...args) => {
    return args.filter(num => num %2 === 0 )
}

const findMin = (...args) => {
    return args.reduce((min, nV) => {
        return min < nV ? min : nV;
})
}

const mergeObjects = (...args) => {
    let obj = {...args[0], ...args[1]}
    return obj;
}

const doubleAndReturnArgs = (arr, ...args) => {
    newArr = args.map(e => e * 2 );
    return [...arr, ...newArr ];
}

/** remove a random element in the items array
and return an array without that item. */

const removeRandom = (items) => {
    randIndex = Math.floor(Math.random() * items.length);
    items.splice(randIndex, 1);
    return items;
}

/** Add every item in array2 to array1. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Add a new key/val to an object. */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Remove a key from an object. */

const removeKey = (obj, key) => {
    newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Update an object, changing a key/value. */

function update(obj, key, val) {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}