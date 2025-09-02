function selectionSort(arr: number[]): number[] {

    const swap = (arr: number[], idx1: number, idx2: number): void => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    for (let i=0; i < arr.length; i++) {
        let lowest = i;
        for (let j=i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
        console.log(arr);
    }

    return arr;
}

selectionSort([5, 3, 4, 1, 2]);