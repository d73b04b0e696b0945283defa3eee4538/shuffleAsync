'use strict'

module.exports = function (arr) {
    if (!Array.isArray(arr))
        return Promise.reject(TypeError('invalid arguments'));

    if (!arr.length)
        return Promise.resolve([]);

    return new Promise((resolve, reject) => {
        (function shuffle(arr, length) {
            if (length === 0) return resolve(arr);

            length--;
            const rand = Math.floor(Math.random() * length);

            if (rand != length) {
                const tmp = arr[length];
                arr[length] = arr[rand];
                arr[rand] = tmp;
            }

            setImmediate(shuffle, arr, length);
        })(Array.from(arr), arr.length);
    });
};
