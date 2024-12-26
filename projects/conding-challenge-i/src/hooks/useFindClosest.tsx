const MINIMUN_RANGE = 1
const MAXIMUN_RANGE = 10


export function useFindClosest() {



    const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

    function findClosestIndex(arr: number[]) {
        const randomNumber = randomInt(MINIMUN_RANGE, MAXIMUN_RANGE)
        console.log("random num ",randomNumber)
        return {closestIndex:findClosest(arr, randomNumber), seed: randomNumber}
    }

    function findClosest(arr: number[], target: number) {
        const n = arr.length;

        if (target <= arr[0])
            return 0;

        if (target >= arr[n - 1])
            return n - 1;

        let i = 0, j = n, mid = 0;

        while (i < j) {

            mid = Math.floor((i + j) / 2);

            if (arr[mid] == target)
                return mid;

            if (target < arr[mid]) {
                if (mid > 0 && target > arr[mid - 1])
                    return getClosest(mid - 1,
                        mid, target, arr);
                j = mid
            }
            else {
                if (mid < n - 1 && target < arr[mid + 1])
                    return getClosest(mid, mid + 1, target, arr);
                i = mid + 1;
            }
        }


        return mid;
    }

    function getClosest(curr_element: number,
        next_element: number,
        target: number, arr: number[]) {
        const val1 = arr[curr_element]
        const val2 = arr[next_element]

        if (Math.abs(val1 - target) > Math.abs(val2 - target)) {
            return next_element
        }
        else {
            return curr_element
        }
    }


    return { findClosestIndex }
}




