
// 최적화 없이 버블 정렬 구현
function bubbleSort1(arr: number[]): number[] {
    for (let i=arr.length; i > 0; i--) {
        for (let j=0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                // SWAP!
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

console.log(`result: ${bubbleSort1([37, 45, 29, 8])}`);

// [37, 45, 29, 8]
// [37, 29, 8, 45]
// [29, 8, 37, 45]
// [8, 29, 37, 45]