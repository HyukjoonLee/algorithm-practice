
// 정렬되어 있는 부분을 체크하여 최적화한 버블 정렬 구현
function bubbleSort2(arr: number[]): number[] {
    let noSwaps: boolean;
    for (let i=arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j=0; j < i - 1; j++) {            
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                // SWAP!
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }

    return arr;
}

console.log(`result: ${bubbleSort2([8, 1, 2, 3, 4, 5, 6, 7])}`);

// [8, 1, 2, 3, 4, 5, 6, 7]
// [1, 2, 3, 4, 5, 6, 7, 8]
// result: 1,2,3,4,5,6,7,8
// (첫 번째 패스에서 이미 정렬이 완료되어 더 이상 패스를 진행하지 않음)