function selectionSort(arr) {
    var swap = function (arr, idx1, idx2) {
        var _a;
        _a = [arr[idx2], arr[idx1]], arr[idx1] = _a[0], arr[idx2] = _a[1];
    };
    for (var i = 0; i < arr.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest)
            swap(arr, i, lowest);
        console.log(arr);
    }
    return arr;
}
selectionSort([5, 3, 4, 1, 2]);
