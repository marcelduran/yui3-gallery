var NativeMap = Array.prototype.map;

/**
 * Executes the supplied function on each item in the array.
 * Returning a new array with the results of calling the
 * supplied function
 * @method map
 * @param a {Array} the array to iterate
 * @param f {Function} the function to execute on each item. The function 
 * receives three arguments: the value, the index, the full array
 * @param o Optional context object
 * @return {Array} new array with the results of calling f on every
 * element in a
 */
Y.Array.map = (NativeMap) ?
    function (a, f, o) { 
        return NativeMap.call(a, f, o);
    } :
    function (a, f, o) {
        var i,
            l = a && a.length || 0,
            r = [];
        for (i = 0; i < l; i += 1) {
            r[i] = f.call(o, a[i], i, a);
        }
        return r;
    };
